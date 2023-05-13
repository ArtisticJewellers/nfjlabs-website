import { Box, Container } from "@mui/material";
import React from "react";

import NFJCard from "../NFJCard";
import { coins } from "./products";

const Coins = () => {
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
        {coins.map((nfj) => (
          <NFJCard {...nfj} />
        ))}
      </Box>
    </Container>
  );
};

export default Coins;
