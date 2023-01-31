import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from '@mui/material/colors';
import { useTheme } from "@mui/material/styles";

const SidebarContainer = ({ children }) => {

    const theme = useTheme();

    return (
        <Grid2
            xs={0}
            sm={0}
            md={3}
            lg={3}
            xl={2}
            sx={{
                backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
                height: "100vh",
                overFlowY: "auto",
                overflowX: "hidden",
            }}>
            {children}
        </Grid2>
    )
}
export default SidebarContainer;