import { socialData } from "../../constants/socialData";
import { IconButton, Box } from "@mui/material";

const SidebarSocial = ({ id, ariaLabel, title, href, icon }) => {
    return (
        <Box
            component="div"
            sx={{
                m: "0 auto",
                textAlign: "center",
            }} >
            {
                socialData.map((data) => {
                    const { ariaLabel, title, href, icon, id } = data;
                    return (<IconButton
                        key={id} 
                        sx={{
                            '&.MuiIconButton-root:hover': {
                                backgroundColor: "transparent"
                            },
                        }}
                        aria-label={ariaLabel}
                    >
                        <a title={title} href={href} target="_blank" rel="noopener noreferrer" >
                            {icon}
                        </a>
                    </IconButton>)
                })
            }
        </Box>

    )
}

export default SidebarSocial;