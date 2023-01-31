import { useState, useEffect } from "react";

import {
  Card,
  CardContent,
} from "@mui/material";


import { Helmet } from "react-helmet-async";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import CustomDivider from "../components/common/CustomDivider";
import { DevExpTimeline, DevEduTimeline, ResumeBanner } from "../components/pages";

const Resume = ({ helmetTitle }) => {

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const theme = useTheme();

  return (
    <Card sx={{
      height: "100vh",
      backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "whitesmoke",
      overflowY: "scroll",
    }}>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="success.main"
          cColor="success"
          icon={<SettingsEthernetRounded />}
          align="center"
          text="رزومه من"
          themeColor={theme.palette.mode === "dark" ? "black" : "white"}
          mb={2}
        />
        <ResumeBanner loading={loading} />
        <Grid2
          container
          sx={{ mt: 2 }}>
          <Grid2
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icon={<HomeRepairServiceRounded />}
              align="center"
              text="تجربیات من"
              themeColor={theme.palette.mode === "dark" ? "black" : "white"}
              mb={3}
            />
            <DevExpTimeline loading={loading} />
          </Grid2>
          <Grid2
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icon={<SchoolRounded />}
              align="center"
              text="تحصیلات من"
              themeColor={theme.palette.mode === "dark" ? "black" : "white"}
              mb={3}
            />
            <DevEduTimeline loading={loading} />
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  )
}

export default Resume;