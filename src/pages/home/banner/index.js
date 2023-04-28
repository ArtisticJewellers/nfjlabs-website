import React from "react";
import GradientText from "../../../components/common/GradientText";
import { Box, Container } from "@mui/material";
import Centered from "../../../components/common/Centered";
import backgroundImage from "../../../assets/homePage/bannerBackgroundTexture.png";
import Trending from "./Trending";
import Web from "./Web";
import Mobile from "./Mobile";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingTop: { xs: "100px", sm: "100px", md: "200px" },
        paddingBottom: "100px",
      }}
    >
      <Container>
        <Centered>
          <Box
            sx={{ width: { sm: "500px", md: "700px" }, textAlign: "center" }}
          >
            {/* WEB TITLE DECORATION */}
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <GradientText titleW text="Collect NFTs backed with Jewellery" />
            </Box>
            {/* MOBILE TITLE DECORATION*/}
            <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
              <GradientText titleM text="Collect NFTs baked with Jewellery" />
            </Box>
          </Box>
        </Centered>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Web />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <Mobile />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
