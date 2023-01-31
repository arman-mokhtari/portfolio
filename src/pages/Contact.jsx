import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
    Card,
    CardContent,
    Slide,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import {
    AccountCircle,
} from "@mui/icons-material";
import { CustomDivider } from "../components/common";

import tealBlue from "../assets/background/tealBlue.png";
import tealBlueLight from "../assets/background/tealBlueLight.png"
import { ContactForm } from "../components/pages"

const Contact = ({ helmetTitle }) => {

    const [loading, setLoading] = useState();
    const theme = useTheme();

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundImage: theme.palette.mode === "dark" ? `url(${tealBlue})` : `url(${tealBlueLight})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                overflowY: "scroll",
                display: 'flex',
                flexDirection: 'column',
            }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="warning.main"
                    cColor="warning"
                    icon={<AccountCircle />}
                    align="center"
                    text="ارتباط با من"
                    themeColor={theme.palette.mode === "dark" ? "black" : "white"}
                    mb={2}
                />
                <Grid2
                    container
                    sx={{
                        mt: 5,
                        display: "flex",
                        justifyContent: "center",

                    }}>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid2
                            xs={12}
                            sm={12}
                            md={10}
                        >
                            <Card sx={{
                                backgroundColor: theme.palette.mode === "dark" ? "#000000b7" : "#ffffffb7",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <ContactForm />
                            </Card>
                        </Grid2>
                    </Slide>
                </Grid2>
            </CardContent>
        </Card>
    )
}

export default Contact