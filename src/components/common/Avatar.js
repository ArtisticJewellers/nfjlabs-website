import { Avatar as MuiAvatar } from "@mui/material";
import React from "react";

const Avatar = ({ size, text, img }) => {
  return (
    <MuiAvatar src={img} sx={{ height: size, width: size, fontSize: size / 2 }}>
      {text ? text : ""}
    </MuiAvatar>
  );
};

export default Avatar;
