import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Typography
      sx={{
        fontFamily: "Cormorant",
        fontSize: { xs: "20px", sm: "30px", md: "50px" },
        backgroundImage:
          "linear-gradient(90deg, #000000 -4.69%, #ECA830 48.02%, #000000 103.89%)",
        backgroundClip: "text",
        color: "transparent",
        fontWeight: 700,
      }}
    >
      NFJ LABS
    </Typography>
  );
};

export default Logo;
