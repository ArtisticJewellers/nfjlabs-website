import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { jewellery } from "./products";
import NFJCard from "../NFJCard";

const Jewellery = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "space-between",
            sm: "space-around",
            md: "space-evenly",
          },
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        {jewellery.map((nfj) => (
          <NFJCard {...nfj} />
        ))}
      </Box>
    </Container>
  );
};

export default Jewellery;
