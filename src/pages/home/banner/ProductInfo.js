import { Box, Button, Typography } from "@mui/material";
import React from "react";
import OutArrowBtn from "../../../components/common/OutArrowBtn";

const ProductInfo = () => {
  return (
    <>
      <Box>
        <Typography fontWeight="500" variant="h4">
          Silver coin
        </Typography>
        <Typography width="300px" marginTop="20px" marginBottom="20px">
          NFT backed QR coded Silver coins ensuring transparency, traceability
          and authenticity where NFT serves as a data repository and digital
          certification and collectables.
        </Typography>
        <OutArrowBtn label="Marketplace" />
      </Box>
    </>
  );
};

export default ProductInfo;
