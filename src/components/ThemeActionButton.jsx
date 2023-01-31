import { useContext } from "react";

import { useTheme } from "@mui/material/styles";
import { Fab, Box } from "@mui/material";
import { WbSunnyOutlined, NightlightOutlined } from "@mui/icons-material";

import MainContext from '../context';

const ThemeActionButton = () => {
    const theme = useTheme();
    const { handleThemeChange } = useContext(MainContext);

    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "none",
                    md: "block",
                    left: 10,
                    top:5,
                },
            }}
        >
            <Fab
                aria-label='ThemeChanger'
                variant="extended"
                size='small'
                color="secondary"
                sx={{
                    color: "whitesmoke",
                    mt: 1,
                }}
                onClick={handleThemeChange}
            >
                {theme.palette.mode === "dark" ? (<WbSunnyOutlined />) : (<NightlightOutlined />)}
                {/* {theme.palette.mode === "dark" ? "تم روز" : "تم شب"} */}
            </Fab>
        </Box>
    );
};

export default ThemeActionButton;