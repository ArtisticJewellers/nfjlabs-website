import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Centered from "../../../components/common/Centered";
import backgroundImage from "../../../assets/homePage/bannerBackgroundTexture.png";
import Web from "./Web";
import Mobile from "./Mobile";
import TypeAnimation from "./TypeAnimation";
import GradientText from "../../../components/common/GradientText";
import Gradient from "../../../components/common/Gradient";

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
        {/* banner heading */}
        <Centered>
          <TypeAnimation />
          {/* Static Tagline */}
          <Gradient>
            <Typography
              sx={{
                fontSize: { sx: "10px", sm: "15px", md: "20px" },
                marginY: 2,
                textAlign:"center"
              }}
            >
              Next-Gen Jewellery Polished With Innovation
            </Typography>
          </Gradient>
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
