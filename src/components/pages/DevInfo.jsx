import { useState } from "react";

import { Typography } from "@mui/material"
import { KeyboardArrowLeftRounded } from "@mui/icons-material"
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body2"
            color="text.primary"
            textAlign="left"
            sx={{
                justifyContent: 'end',
                display: 'flex',
                alignItems: 'center',
                mt: 2,
            }}
        >
            {children}
            <KeyboardArrowLeftRounded
                color="primary" />
        </Typography>
    )
};

const DevInfo = () => {
    const [start, setStart] = useState(false);
    return (
        <>
            <Info>
                نام و نام خانوادگی :  <RandomReveal
                    isPlaying
                    revealEasing="linear"
                    duration={3}
                    characterSet={alphabetPersian}
                    characters={"آرمان مختاری"}
                    onComplete={() => setStart(true)} />
            </Info>
            <Info>
                {start && (<RandomReveal
                    isPlaying
                    revealEasing="linear"
                    duration={3}
                    characters={"rmn.mokhtarii@gmail.com"} />)} : ایمیل
            </Info>
        </>
    )
};

export default DevInfo;