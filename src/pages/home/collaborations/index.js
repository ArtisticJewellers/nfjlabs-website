import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";

import orient from "../../../assets/homePage/collaborations/orient.webp";
import gs from "../../../assets/homePage/collaborations/gs.webp";
import vitale from "../../../assets/homePage/collaborations/logo-VITALE.webp";

import Centered from "../../../components/common/Centered";
import Headding from "../../../components/common/Headding";

const Collaborations = () => {
  const collaborators = [
    { name: "GS Diamonds", image: gs },
    { name: "Orient Pearls", image: orient },
    { name: "Vitale 1913", image: vitale },
    // { name: "Orient Pearls", image: orient },
  ];
  return (
    <>
      <Container sx={{ marginY: "30px" }}>
        <Centered>
          <Headding text="Collaborations" />
        </Centered>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              marginBottom: "100px",
            },
          }}
        >
          <Web collaborators={collaborators} />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <Mobile collaborators={collaborators} />
        </Box>
      </Container>
    </>
  );
};

export default Collaborations;
