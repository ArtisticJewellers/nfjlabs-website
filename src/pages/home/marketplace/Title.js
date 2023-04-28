import { Box, Container, Typography } from "@mui/material";
import React from "react";
import GradientText from "../../../components/common/GradientText";
import OutArrowBtn from "../../../components/common/OutArrowBtn";

const Title = () => {
  return (
    <div>
      <Container>
        <Typography
          sx={{ fontSize: { xs: "10px", sm: "24px", md: "24px" } }}
          fontWeight="500"
          color="primary"
        >
          Products Offer
        </Typography>
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
            <GradientText headingW text="Marketplace" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
            <GradientText headingM text="Marketplace" />
          </Box>

          <OutArrowBtn label="Show all Products" />
        </Box>
      </Container>
    </div>
  );
};

export default Title;
