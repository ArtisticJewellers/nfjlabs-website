import { Typography } from "@mui/material";
import React from "react";

const Headding = ({ text }) => {
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: { xs: "25px", sm: "35px", md: "48px" },
        marginY: { xs: "10px", sm: "20px", md: "20px" },
      }}
    >
      {text}
    </Typography>
  );
};

export default Headding;
