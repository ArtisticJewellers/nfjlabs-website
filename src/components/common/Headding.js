import { Typography } from "@mui/material";
import React from "react";

const Headding = ({ text, children, size }) => {
  const fontSize = {
    s1: { xs: "20px", sm: "30px", md: "40px" },
    s2: { xs: "17px", sm: "25px", md: "35px" },
  };
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: size
          ? fontSize[size]
          : { xs: "25px", sm: "35px", md: "48px" },
        marginY: { xs: "10px", sm: "20px", md: "20px" },
      }}
    >
      {text ? text : children}
    </Typography>
  );
};

export default Headding;
