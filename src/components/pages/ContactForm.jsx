import { useTheme } from "@mui/material/styles";

import {
    Typography,
    CardContent,
    TextField,
    InputAdornment,
    CardActions,
    Button,
} from "@mui/material";
import {
    Face6Rounded,
    SubjectRounded,
    EmailRounded
} from "@mui/icons-material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { contactValidationSchema } from "../../validations/contactValidation";

const ContactForm = () => {
    const theme = useTheme();

    const contactInputNames = {
        fullname: "",
        email: "",
        subject: "",
        message: "",
        recaptcha: "",
    };

    const formik = useFormik({
        initialValues: contactInputNames,
        onsubmit: values => {
            console.log("Form Values: ", values);
        },
        validationSchema: contactValidationSchema,
    });

    return (
        <form
            onSubmit={formik.handleSubmit}
            method="post"
            autoComplete="off">
            <CardContent>
                <Grid2 container>
                    <Grid2
                        xs={12}
                        sx={{
                            direction: "ltr",
                        }}>
                        <Grid2 container spacing={2}>
                            <Grid2
                                xs={12}
                                md={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="نام و نام خانوادگی"
                                    name="fullname"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.fullname ? formik.errors.fullname : null
                                    }
                                    error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                    value={formik.values?.fullname}
                                    onChange={formik.handleChange}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Face6Rounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid2>
                            <Grid2
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="آدرس ایمیل"
                                    name="email"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.email ? formik.errors.email : null
                                    }
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailRounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid2>
                            <Grid2
                                xs={12}
                                md={12}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="عنوان"
                                    name="subject"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.subject ? formik.errors.subject : null
                                    }
                                    error={Boolean(formik.touched.subject && formik.errors.subject)}
                                    value={formik.values?.subject}
                                    onChange={formik.handleChange}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SubjectRounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid2>
                            <Grid2
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={8}
                                    size="small"
                                    color="warning"
                                    label="متن پیام"
                                    name="message"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.message ? formik.errors.message : null
                                    }
                                    error={Boolean(formik.touched.message && formik.errors.message)}
                                    value={formik.values?.message}
                                    onChange={formik.handleChange}
                                />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </CardContent>
            <CardActions
                sx={{
                    alignItems: "end",
                    flexDirection: "column",
                }}
            >
                <ReCAPTCHA
                    sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    theme={theme.palette.mode}
                    hl="fa"
                    onChange={value => {
                        formik.setFieldValue("recaptcha", value)
                    }}
                />
                {
                    formik.errors.recaptcha && formik.touched.recaptcha && (
                        <Typography
                            variant="caption"
                            color="error">
                            {formik.errors.recaptcha}
                        </Typography>
                    )
                }
                <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                    }}>
                    ارسال کن
                </Button>
            </CardActions>
        </form>
    )
}

export default ContactForm;