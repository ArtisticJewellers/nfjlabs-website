import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Centered from "../../../components/common/Centered";
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
      {/* <Centered> */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: "30px",
            sm: "35px",
            md: "35px",
            lg: "40px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "350px",
            lg: "400px",
          },
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
          },
          paddingX: {
            xs: "5%",
            sm: "0%",
            md: "0%",
          },
        }}
      >
        Transforming Jewellery Ownership With the Power of NFTs!
      </Typography>
      {/* </Centered> */}

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: {
            xs: "15px",
            sm: "19px",
            md: "17px",
            lg: "20px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "360px",
            lg: "400px",
          },
          color: "#808080",
          textAlign: {
            xs: "center",
            sm: "center",
            md: "left",
          },
          paddingX: {
            xs: "5%",
            sm: "0%",
            md: "0%",
          },
        }}
      >
        Imagine a world where jewellery transcends its physical nature,
        intertwining seamlessly with cutting-edge technology. That future is now
        within reach, and the key lies in Non-Fungible Tokens (NFTs). Let's
        explore why jewellery should embrace this groundbreaking concept and
        unlock a world of endless possibilities.
      </Typography>
    </Box>
  );
};

export default Explore;
