import { Box, Button, Typography } from "@mui/material";
import React from "react";
import OutArrowBtn from "../../../components/common/OutArrowBtn";

const ProductInfo = () => {
  return (
    <>
      <Box>
        <Typography fontWeight="500" variant="h5" width="300px">
          Combining QR Code With Silver Coin
        </Typography>
        <Typography width="300px" marginTop="20px" marginBottom="20px">
          The Silver Coin with the technology of tomorrow. The NFT-backed
          QR-coded Silver coins are a mark of transparency, traceability and
          authenticity as NFT ensures a safe data repository and digital
          certification of the collectibles.
        </Typography>
        <OutArrowBtn label="Marketplace" />
      </Box>
    </>
  );
};

export default ProductInfo;
