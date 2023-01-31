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
import { WorkHistoryRounded } from "@mui/icons-material";
import { devExp } from "../../constants/detail";


const DevExpTimeline = ({loading}) => {

  return (
    <Timeline position="right" sx={{
      direction: "ltr"
    }} >
      {
        devExp.map((item, index) => (
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="warning" variant="outlined">
                  <WorkHistoryRounded color="warning" />
                </TimelineDot>
                {index !== 2 ? (<TimelineConnector />) : null}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="caption" color="text.secondary">
                  {item.year}
                </Typography>
                <Typography variant="body1" color="text.main">
                  {item.activity}
                </Typography>
                <Typography variant="body2" sx={{
                  display: 'flex',
                  alignItems: "center",
                }}>
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

export default DevExpTimeline;