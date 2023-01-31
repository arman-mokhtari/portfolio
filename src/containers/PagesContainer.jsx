import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useTheme } from "@mui/material/styles";

const PagesContainer = ({ children }) => {
    const theme = useTheme();

    return (
        <Grid2
            xs={12}
            sm={12}
            md={9}
            lg={9}
            xl={10}
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "whitesmoke",
            }}>
            {children}
        </Grid2>
    )
}
export default PagesContainer;