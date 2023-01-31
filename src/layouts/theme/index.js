import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: "vazir, roboto",
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});

export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: "vazir, roboto",
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});