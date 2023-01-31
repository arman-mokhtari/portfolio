import { useRef, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";

import { Box, Typography } from "@mui/material"
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";

import bg06 from "../assets/background/bg05.png";

const Home = ({helmetTitle}) => {
    const infoEl = useRef(null);
    const strings = [
        "من یک توسعه دهنده دنیای وب هستم",
        "من یک توسعه دهنده ری اکت هستم",
        "من یک توسعه دهنده جاوا اسکریپت هستم",
        "من یک فریلنسر هستم",
    ];
    
    useEffect(() => {

        const typedInfo = new Typed(infoEl.current, {
            strings,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 50,
            loop: true,
            showCursor: false,
        })
        return () => {

            typedInfo.destroy();
        };
    }, [])

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg06})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />
            <Typography
                ref={infoEl}
                variant="h5"
                color="white"
                sx={{
                    textShadow: "#27d6e3 0px 2px 10px;27D6E327D6E3"
                }}>
            </Typography>
        </Box>
    )
}

export default Home