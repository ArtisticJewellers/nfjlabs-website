import { Box, Container } from "@mui/material";
import React from "react";
import Explore from "./Explore";
import NFJFeatures from "./NFJFeatures";
import backgroundImage from "../../../assets/homePage/features/backgroundTexture.png";
import ExploreBtn from "./ExploreBtn";
import Centered from "../../../components/common/Centered";

const FeaturesNew = () => {
  return (
    <Container>
      <Explore />
      <NFJFeatures />
    </Container>
  );
};

export default FeaturesNew;
