import { Box, Container, IconButton } from "@mui/material";
import React from "react";
import BlogBanner from "../../../components/blogBanner";
import { ArrowBack } from "@mui/icons-material";

const Banner = ({ bannerDetails }) => {

  const Web = () => {
    return (
      <>
        <Box sx={{ mt: 10 }} />
        <Container>
          <BlogBanner slide={bannerDetails} />
        </Container>
      </>
    );
  };
  const Mobile = () => {
    return (
      <>
        <Box
          sx={{
            backgroundImage: `url(${bannerDetails.bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "cover",
            height: "400px",
            pt: 10,
            mb: 2,
          }}
        >
          <IconButton>
            <ArrowBack color="secondary" />
          </IconButton>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Web />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Mobile />
      </Box>
    </>
  );
};

export default Banner;
