import {
    Coffee,
    SchoolRounded,
    DataObjectRounded,
    DomainVerificationRounded,
} from "@mui/icons-material";

export const devWorkInfo = [
    {
        tooltipTitle: "تعداد قهوه های خورده شده",
        icon: <Coffee />,
        total: 1650,
        color: "lightcoral",
    },
    {
        tooltipTitle: "تعداد دوره های گذرانده شده",
        icon: <SchoolRounded />,
        total: 14,
        color: "lightskyblue",
    },
    {
        tooltipTitle: "تعداد پروژه های من",
        icon: <DataObjectRounded />,
        total: 23,
        color: "lightslategray",
    },
    {
        tooltipTitle: "تعداد پروژه های به پایان رسیده",
        icon: <DomainVerificationRounded />,
        total: 12,
        color: "lightseagreen",
    },
];
