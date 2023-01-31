import { Typography } from "@mui/material";
import ThemeActionButton from "../ThemeActionButton";
import { useTheme } from "@mui/material/styles";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {

    const theme = useTheme();
    return (
        <>
            <ThemeActionButton />
            <CustomAvatar
                h={75}
                w={75}
                sm="none"
                xs="none"
                mt={2}
            />
            <Typography
                sx={{
                    marginTop: 0.5,
                    color: theme.palette.mode === "dark" ? "text.primary" : "text.secondary"
                }}
                variant='h6'
            >
                آرمان مختاری
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.mode === "dark" ? "text.primary" : "text.secondary"
                }}
                variant='caption'>
                برنامه نویس و توسعه دهنده فرانت اند
            </Typography>
        </>
    )
}
export default SidebarHeader;