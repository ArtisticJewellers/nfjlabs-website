import { Box, Button, Typography } from "@mui/material";
import React from "react";

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
        <Button
          sx={{ color: "black", borderColor: "black" }}
          variant="outlined"
        >
          Marketplace
        </Button>
      </Box>
    </>
  );
};

export default ProductInfo;
