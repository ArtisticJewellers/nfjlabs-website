import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Centered from "../../../components/common/Centered";
import ExploreBtn from "./ExploreBtn";
import animatedGif from "../../../assets/homePage/features/nft.gif";

const Explore = () => {
  return (
    <Box>
      <Centered>
        {/* HEADDING */}
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: {
              xs: "30px",
              sm: "35px",
              md: "35px",
              lg: "40px",
            },
            textAlign: "center",
            width: { xs: "90%", sm: "70%", md: "70%" },
          }}
        >
          Transforming Jewellery Ownership With the Power of{" "}
          <span style={{ color: "#FFC84A" }}>NFTs!</span>
        </Typography>
        {/* ANIMATED NFT GIF  */}
        <img src={animatedGif} width="340px" />
        {/* INFO */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: {
              xs: "15px",
              sm: "19px",
              md: "17px",
              lg: "22px",
            },
            width: { xs: "90%", sm: "70%", md: "70%" },
            color: "#020E19",
            textAlign: "center",
          }}
        >
          Imagine a world where jewellery transcends its physical nature,
          intertwining seamlessly with cutting-edge technology. That future is
          now within reach, and the key lies in Non-Fungible Tokens (NFTs).
          Let's explore why jewellery should embrace this groundbreaking concept
          and unlock a world of endless possibilities.
        </Typography>
        <Button
          sx={{
            background:
              "linear-gradient(92.52deg, #12161D -3.38%, #272B33 100%)",
            fontSize: "18px",
            paddingX: 6,
            paddingY: "12px",
            marginY: 3,
          }}
        >
          Know more
        </Button>
      </Centered>
    </Box>
  );
};

export default Explore;
