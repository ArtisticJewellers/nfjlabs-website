import { Box, Button, Typography } from "@mui/material";
import React from "react";
import backgroundImage from "../../../assets/homePage/features/backgroundTexture.png";
import { Height } from "@mui/icons-material";
import ExploreBtn from "./ExploreBtn";

const Explore = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "45%",
        },
        marginBottom: {
          xs: "20px",
          sm: "35px",
          md: "0px",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize:  {
            xs: "30px",
            sm: "35px",
            md: "40px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "400px",
          },
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
          },
        }}
      >
        Why jewellery should have been NFT
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize:  {
            xs: "15px",
            sm: "20px",
            md: "20px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "400px",
          },
          color: "#808080",
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
          },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Typography>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
        }}
      >
        <ExploreBtn />
      </Box>
    </Box>
  );
};

export default Explore;
