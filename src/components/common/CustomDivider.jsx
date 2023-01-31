import { useState, useEffect } from "react";
import { Divider, Chip, Typography, Slide } from "@mui/material";


const CustomDivider = ({ bColor, cColor, icon, align, text, themeColor, mb, my }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        };

    }, []);

    return (
        <>
            <Slide
                direction="down"
                in={loading}
                style={{
                    transitionDelay: loading ? "200ms" : "0ms",
                }}
            >
                <Divider
                    textAlign={align}
                    sx={{
                        "&::before, &::after": {
                            borderColor: bColor
                        },
                        mb: mb,
                        my: my,
                    }}
                >
                    <Chip
                        icon={icon}
                        color={cColor}
                        label={
                            <Typography
                                variant="body1"
                                sx={{
                                    textAlign: align,
                                    color: themeColor,
                                }}>
                                {text}
                            </Typography>
                        }
                        sx={{
                            p: 3,
                        }}
                    />
                </Divider>
            </Slide>
        </>
    )
}

export default CustomDivider;