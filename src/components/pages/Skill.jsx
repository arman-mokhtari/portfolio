import {
    Typography,
    Chip,
    Box,
    Divider,
    LinearProgress,
    Badge,
} from "@mui/material"
import { useTheme } from "@mui/material/styles";


const Skill = ({ icon, color, name, value }) => {
    const theme = useTheme();

    return (
        <>
            <Divider
                textAlign="right"
                sx={{
                    "&::before, &::after": {
                        borderColor: "transparent"
                    },
                }}
            >
                <Chip
                    icon={
                        <Box
                            component="img"
                            src={icon}
                            sx={{
                                height: 20,
                            }}
                        />
                    }
                    color={color}
                    label={name}
                    sx={{
                        color: theme.palette.mode === "dark" ? "black" : "white",
                        p: 2,
                    }}
                />
            </Divider>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        minWidth: 35,
                        mr: 1,
                    }}
                >

                    <Typography
                        variant="body2"
                    >
                        <Badge
                            variant="standard"
                            badgeContent={`${Math.round(value)}%`}
                            color={color} />

                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        mr: 1,
                    }}>
                    <LinearProgress
                        variant="determinate"
                        value={value}
                        color={color}
                        sx={{
                            height: 10,
                            borderRadius: 2,
                            my: 1,
                        }} />
                </Box>

            </Box>
        </>
    )
}

export default Skill