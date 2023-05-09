import { Box } from "@mui/material";
import React from "react";
import Trending from "./Trending";
import coin from "../../../assets/homePage/trending/coin.gif";
import ProductInfo from "./ProductInfo";

const Mobile = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <img
          style={{
            borderRadius: "50px",
            marginTop: "10px",
            marginBottom: "20px",
          }}
          height="350px"
          src={coin}
        />
        <Trending />
      </Box>
    </>
  );
};

export default Mobile;
