import { Avatar } from "@mui/material";
import avatar from "../../assets/myPic/Arman.png";

const CustomAvatar = ({ h, w, sm, xs, variant, mt }) => {
    return (
        <Avatar
            src={avatar}
            variant={variant}
            alt="آرمان مختاری"
            sx={{
                height: h,
                width: w,
                margin: "0 auto",
                mt: mt,
                display: {
                    md: "block",
                    lg: "block",
                    xl: "block",
                    sm: sm,
                    xs: xs,
                }
            }}
        />
    )
}

export default CustomAvatar;