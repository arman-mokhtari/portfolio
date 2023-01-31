import { useContext } from "react";

import { Fab, Box } from "@mui/material"
import { MenuRounded } from "@mui/icons-material"
import { grey } from '@mui/material/colors';

import MainContext from '../../context'

const DrawerActionButton = () => {
    const { setDrawerOpen } = useContext(MainContext);
    return (
        <Box
            sx={{
                position: "absolute",
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                }
            }}
        >
            <Fab
                aria-label='Sidebar'
                size='small'
                sx={{
                    backgroundColor: grey[300],
                    m: 2
                }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuRounded />
            </Fab>
        </Box>
    )
}

export default DrawerActionButton