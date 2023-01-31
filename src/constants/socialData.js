import { GitHub, Facebook, Instagram, Twitter } from "@mui/icons-material";
export const socialData = [
    {
        id: 4,
        ariaLabel: "Twitter",
        title: "Twitter",
        href: "https://twitter.com/RmanMokhtari",
        icon: <Twitter sx={{
            color: "text.secondary",
            transition: "all 0.2s linear",
            '&.MuiSvgIcon-root:hover': {
                transform: "scale(1.1)",
                color: "teal"
            },
        }} />
    },
    {
        id: 3,
        ariaLabel: "Instagram",
        title: "Instagram",
        href: "https://www.instagram.com/arman____mokhtari",
        icon: <Instagram sx={{
            color: "text.secondary",
            transition: "all 0.2s linear",
            '&.MuiSvgIcon-root:hover': {
                transform: "scale(1.1)",
                color: "teal"
            },
        }} />
    },
    {
        id: 2,
        ariaLabel: "Facebook",
        title: "Facebook",
        href: "https://www.facebook.com/rmn.mokhtari",
        icon: <Facebook sx={{
            color: "text.secondary",
            transition: "all 0.2s linear",
            '&.MuiSvgIcon-root:hover': {
                transform: "scale(1.1)",
                color: "teal"
            },
        }} />
    },
    {
        id: 1,
        ariaLabel: "GitHub",
        title: "Github",
        href: "https://github.com/arman-mokhtari",
        icon: <GitHub sx={{
            color: "text.secondary",
            transition: "all 0.2s linear",
            '&.MuiSvgIcon-root:hover': {
                transform: "scale(1.1)",
                color: "teal"
            },
        }} />
    },
];