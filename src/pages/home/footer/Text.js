import { Typography } from "@mui/material";
import React from "react";

const Text = ({ text, type1, type2, type3, type4, type5 }) => {
  return (
    <Typography
      sx={{
        fontFamily: type5 ? "Cormorant" : "Montserrat",
        fontSize: type1
          ? { xs: "15px", sm: "15px", md: "18px" }
          : type2 || type3 || type5
          ? { xs: "12px", sm: "10px", md: "14px" }
          : type4
          ? { xs: "8px", sm: "10px", md: "12px" }
          : "",
        fontWeight: type1 ? 500 : 400,
        color: type2 || type5 ? "#3D3D3D" : "black",
        mb: type1 ? "15px" : "10px",
        maxWidth: { xs: "150px", sm: "200px", md: "240px" },
        "&:hover": {
          color: "black",
        },
      }}
    >
      {text}
    </Typography>
  );
};

export default Text;
