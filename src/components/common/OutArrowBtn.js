import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';import React from "react";

const OutArrowBtn = ({ label }) => {
  return (
    <>
      <Button
        sx={{ color: "black", borderColor: "black" }}
        variant="outlined"
        endIcon={<ArrowOutwardIcon />}
      >
        {label}
      </Button>
    </>
  );
};

export default OutArrowBtn;
