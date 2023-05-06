import { Box, Container } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import Sitemap from "./Sitemap";
import Socials from "./Socials";
import Office from "./Office";

const Footer = () => {
  return (
    <Container sx={{ marginTop: "100px", marginBottom: "50px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Box
          alignSelf="center"
          sx={{ display: { xs: "none", sm: "block", md: "block" } }}
        >
          <Logo />
        </Box>
        <Sitemap />
        <Socials />
        <Office />
      </Box>
    </Container>
  );
};

export default Footer;
