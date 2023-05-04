import { Box } from "@mui/material";
import React from "react";

const Centered = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default Centered;
