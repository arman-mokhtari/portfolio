import {
  Typography,
  Slide,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { devEdu } from "../../constants/detail";


const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{
      direction: "ltr"
    }} >
      {
        devEdu.map((item, index) => (
          <Slide
            key={index}
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="info" variant="outlined">
                  <SchoolRounded color="info" />
                </TimelineDot>
                {index !== 2 ? (<TimelineConnector />) : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="text.secondary">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="text.main">
                  {item.cert}
                </Typography>
                <Typography variant="body2" color="text.main">
                  {item.major}
                </Typography>
                <Typography variant="body2" color="text.main">
                  {item.place}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Slide>
        ))
      }
    </Timeline>
  )
}

export default DevEduTimeline;