import { useState,useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import TextTransition, { presets } from "react-text-transition";

import {
    Box,
    Typography,
    Slide,
  } from "@mui/material";

const ResumeBanner = ({loading}) => {

    const [index, setIndex] = useState(0);
    const strings = [
      "توسعه دهنده دنیای وب هستم",
      "توسعه دهنده ری اکت هستم",
      "توسعه دهنده جاوا اسکریپت هستم",
      "فریلنسر هستم",
    ];

    useEffect(() => {

        const stringsTransition = setInterval(() => {
          setIndex((index) => index + 1);
        }, 3000)
    
        return () => {

          clearInterval(stringsTransition);
        };
      }, []);
    
      const theme = useTheme();


  return (
    <Slide
          direction="right"
          in={loading}
          style={{
            transitionDelay: loading ? "400ms" : "0ms",
          }}
        >
          <Box
            sx={{
              backgroundColor: "secondary.main",
              backgroundSize: "cover",
              height: "20vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <TextTransition
              springConfig={presets.slow}>
              <Typography
                variant="h6"
                sx={{
                  whiteSpace: "nowrap",
                  color: theme.palette.mode === "dark" ? "black" : "white",
                }}>
                {strings[index % strings.length]}
              </Typography>
            </TextTransition>
            <Typography
              variant="h6"
              sx={{
                mr: 1,
                color: theme.palette.mode === "dark" ? "black" : "white",
              }}
            >
              من یک
            </Typography>
          </Box>
        </Slide>
  )
}

export default ResumeBanner;