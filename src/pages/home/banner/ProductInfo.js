import { Box, Button, Typography } from "@mui/material";
import React from "react";
import OutArrowBtn from "../../../components/common/OutArrowBtn";

const ProductInfo = () => {
  return (
    <>
      <Box>
        <Typography fontWeight="500" variant="h4">
          Product Name
        </Typography>
        <Typography width="300px" marginTop="20px" marginBottom="20px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <OutArrowBtn label="Marketplace" />
      </Box>
    </>
  );
};

export default ProductInfo;
