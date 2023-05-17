import { Box, Container } from "@mui/material";
import React from "react";
import Explore from "./Explore";
import NFJFeatures from "./NFJFeatures";
import backgroundImage from "../../../assets/homePage/features/backgroundTexture.png";
import ExploreBtn from "./ExploreBtn";
import Centered from "../../../components/common/Centered";

const Features = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: {
            xs: "top left",
            sm: "top left",
            md: "bottom left",
          },
          backgroundSize: "35%",
          marginTop: 10, // Set margin top to 0
          paddingTop: 0, // Set padding top to 0
        }}
      >
        <Explore />
        <NFJFeatures />
      </Box>
      <Centered>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <ExploreBtn />
        </Box>
      </Centered>
    </Container>
  );
};

export default Features;
