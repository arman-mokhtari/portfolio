import {
    Card,
    CardContent,
} from "@mui/material";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material/styles";
import { CustomDivider, CustomAvatar } from "../components/common";

import { DevInfo, Skills } from "../components/pages";

const About = ({ helmetTitle }) => {

    const theme = useTheme();

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "whitesmoke",
            overflowY: "scroll",
        }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <Grid2 container sx={{
                    mx: 3,
                }}>
                    <Grid2
                        xs={12}
                        sm={8}
                        md={8}
                        lg={8}
                        xl={8}
                    >
                        <CustomDivider
                            bColor="primary.main"
                            cColor="primary"
                            icon={<CodeRounded />}
                            align="right"
                            text="برنامه نویس و توسعه دهنده وب"
                            themeColor={theme.palette.mode === "dark" ? "black" : "white"}
                            mb={3}
                        />
                        <DevInfo />



                    </Grid2>
                    <Grid2
                        xs={0}
                        sm={4}
                        md={4}
                        lg={4}
                        xl={4}
                    >
                        <CustomAvatar
                            h={150}
                            w={150}
                            sm="block"
                            xs="none"
                            variant="rounded"
                        />
                    </Grid2>
                </Grid2>
                <Grid2 container>
                    <Grid2
                        sx={{
                            width: 1,
                            mt: 1,
                        }}
                    >
                        <CustomDivider
                            bColor="secondary.main"
                            cColor="secondary"
                            icon={<SelfImprovementRounded />}
                            align="center"
                            text="مهارت های من"
                            themeColor={theme.palette.mode === "dark" ? "black" : "white"}
                            my={2}
                        />
                        <Skills />
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    )
};

export default About;