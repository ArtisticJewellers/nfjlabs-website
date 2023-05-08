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
          Our lion-and-sun jewelry combines the strength and courage of the lion
          with the vitality and energy of the sun to create a truly
          one-of-a-kind piece. Crafted with care and precision, this jewelry is
          a true work of art.
        </Typography>
        <OutArrowBtn label="Marketplace" />
      </Box>
    </>
  );
};

export default ProductInfo;
