import {
    Box,
    Chip,
    Typography,
    Tooltip,
} from "@mui/material";

import { devWorkInfo } from "../../constants/details";
import CountUp from "react-countup";

const DevWorkCount = () => {
    return (
        <>
            {
            devWorkInfo.map((item, index) => (
                <Box
                    key={index}
                    component="div"
                    sx={{
                        width: 1,
                        mb: 4,
                    }}>
                    <Tooltip
                        title={item.tooltipTitle}
                        placement="top"
                    >
                        <Chip icon={item.icon} label={
                            <Typography
                                variant="body1"
                                color="text.primary">
                                <CountUp
                                    start={0}
                                    end={item.total}
                                    duration={2}
                                />
                            </Typography>}
                            sx={{
                                p: 2,
                                backgroundColor: item.color,
                                width: 1
                            }} />
                    </Tooltip>
                </Box>
            ))
            }
        </>
    );
};
export default DevWorkCount;