import { Box } from "@mui/material";
import React from "react";
import Trending from "./Trending";
import coin from "../../../assets/homePage/trending/coin.gif";
import ProductInfo from "./ProductInfo";

const Web = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Trending web />
        <img style={{ borderRadius: "50px" }} height="300px" src={coin} />
        <ProductInfo />
      </Box>
    </>
  );
};

export default Web;
