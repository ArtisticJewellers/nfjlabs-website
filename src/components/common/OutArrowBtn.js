import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';import React from "react";

const OutArrowBtn = ({ label }) => {
  return (
    <>
      <Button
        sx={{ color: "black", borderColor: "black", fontSize:{xs:"10px", sm:"15px", md:"19px"} }}
        variant="outlined"
        endIcon={<ArrowOutwardIcon />}
      >
        {label}
      </Button>
    </>
  );
};

export default OutArrowBtn;
