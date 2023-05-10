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
          paddingX: {
            xs: "5%",
            sm: "0%",
            md: "0%",
          },
        }}
      >
        Why jewellery should have been NFT?
      </Typography>
      {/* </Centered> */}

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: {
            xs: "15px",
            sm: "19px",
            md: "19px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            md: "390px",
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
        By creating an NFT for a piece of jewelry, the owner can provide a
        secure and transparent way to prove that they are the rightful owner and
        that the jewelry is authentic.
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
