import { Box, Container, IconButton } from "@mui/material";
import React from "react";
import BlogBanner from "../../../../components/blogBanner";
import blogImage from "../../../../assets/blog/blogs/b1.jpg";
import { ArrowBack } from "@mui/icons-material";

const Banner = () => {
  const bannerDetails = {
    title: "How is Blockchain Shaping the Diamond Industry?",
    description:
      "The diamond industry is often associated with opulence and luxury, but it is also notorious for its lack of transparency and accountability. In recent years, blockchain technology has emerged as a game-changer in this industry. Blockchain, which is essentially a decentralized digital ledger, can help track the journey of a diamond from its origin to its final destination, ensuring authenticity, ethical sourcing, and transparency throughout the supply chain.",
    bgImage: blogImage,
    writer: "Writer Name",
  };

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
