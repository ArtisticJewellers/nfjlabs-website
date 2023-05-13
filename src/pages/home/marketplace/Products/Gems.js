import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { gems } from "./products";
import NFJCard from "../NFJCard";

const Gems = () => {
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
        {gems.map((nfj) => (
          <NFJCard {...nfj} />
        ))}
      </Box>
    </Container>
  );
};

export default Gems;
