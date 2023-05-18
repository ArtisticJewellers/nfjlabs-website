import { Typography } from "@mui/material";
import React from "react";

const Para = ({ text, children, size }) => {
  //   const fontSize = { s1: { xs: "20px", sm: "30px", md: "40px" } };
  return (
    <Typography paragraph
      sx={{
        fontSize: { xs: "15px", sm: "20px", md: "25px" },
        fontWeight: 500,
        color: "#A1A1A1",
      }}
    >
      {text ? text : children}
    </Typography>
  );
};

export default Para;
