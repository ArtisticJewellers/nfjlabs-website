import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";

import alessio from "../../../assets/homePage/collaborations/alessio.png";
import orient from "../../../assets/homePage/collaborations/orient.png";
import Centered from "../../../components/common/Centered";
import Headding from "../../../components/common/Headding";

const Collaborations = () => {
  const collaborators = [
    { name: "Alessio Boschi", image: alessio },
    { name: "Orient Pearls", image: orient },
    { name: "Alessio Boschi", image: alessio },
    { name: "Orient Pearls", image: orient },
  ];
  return (
    <>
      <Container sx={{ marginY: "30px" }}>
        <Centered>
          <Headding text="Collaborations"/>
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
