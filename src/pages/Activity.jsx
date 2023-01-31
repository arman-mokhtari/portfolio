import {
    Card,
    CardContent,
    Box,
} from "@mui/material";
import { RowingRounded } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material/styles";
import { CustomDivider } from "../components/common";
import graphicDeveloper from "../assets/background/graphicDeveloper.png"
import { DevWorkCount } from "../components/pages";

const Activity = ({ helmetTitle }) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "whitesmoke",
                height: "100vh",
                overflowY: "scroll",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor="primary.main"
                    cColor="primary"
                    icon={<RowingRounded />}
                    align="center"
                    text="فعالیت های من"
                    themeColor={theme.palette.mode === "dark" ? "black" : "white"}
                    mb={2}
                />
                <Grid2
                    container
                    sx={{

                        justifyContent: "center",
                    }}
                >
                    <Grid2
                        sx={{
                            mt: 1
                        }}
                        xs={12}
                        sm={10}
                        md={10}
                        lg={5}
                        xl={5}
                    >
                        <DevWorkCount />
                    </Grid2>
                    <Grid2
                        xs={12}
                        sm={12}
                        md={12}
                        lg={6}
                        xl={6}
                    >

                        <Box
                            sx={{
                                backgroundImage: `url(${graphicDeveloper})`,
                                backgroundPosition: "top",
                                height: "250px",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                            }}
                        ></Box>
                    </Grid2>
                </Grid2>


            </CardContent>
        </Card>
    )
}

export default Activity;