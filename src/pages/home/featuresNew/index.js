import { Box, Container } from "@mui/material";
import React from "react";
import Explore from "./Explore";
import NFJFeatures from "./NFJFeatures";
import backgroundImage from "../../../assets/homePage/features/backgroundTexture.png";
import ExploreBtn from "./ExploreBtn";
import Centered from "../../../components/common/Centered";
import Spacer from "../../../components/common/Spacer";

const FeaturesNew = () => {
  return (
    <Container>
      <Box sx={{marginY:6}}>
      <Explore />
      <Spacer size={30}/>
      <NFJFeatures />
      </Box>

    </Container>
  );
};

export default FeaturesNew;
