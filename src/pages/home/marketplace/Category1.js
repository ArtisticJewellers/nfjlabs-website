import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import dolce from "../../../assets/homePage/trending/dolce.gif";
import goldenstan from "../../../assets/homePage/trending/Goldenstan.gif";
import lion from "../../../assets/homePage/trending/sunLion.gif";
import qajar from "../../../assets/homePage/trending/qajar.gif";
import NFJCard from "./NFJCard";

const Category1 = () => {
  const nfjs = [
    { name: "DOLCE VITA RING", gif: dolce, type: "RING", value: "1,790" },
    { name: "SUN LION", gif: lion, type: "RING", value: "1,990" },
    { name: "GOLDENSTAN", gif: goldenstan, type: "RING", value: "2,790" },
    { name: "QUAJAR CUFFINKS", gif: qajar, type: "RING", value: "1,690" },
  ];

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop:"30px"
        }}
      >
        {nfjs.map((nfj) => (
          <NFJCard {...nfj} />
        ))}
      </Box>
    </Container>
  );
};

export default Category1;
