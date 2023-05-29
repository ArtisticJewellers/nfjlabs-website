import React from "react";
import b1 from "../../../assets/blog/blogs/b1.webp";
import b2 from "../../../assets/blog/blogs/b2.webp";
import b3 from "../../../assets/blog/blogs/b3.webp";
import b4 from "../../../assets/blog/blogs/b4.webp";
import b5 from "../../../assets/blog/blogs/b5.webp";
import Row from "../../../components/common/Row";
import Web from "./Web";
import { Box, Container } from "@mui/material";
import Mobile from "./Mobile";

const TopStories = () => {
  const stories = [
    {
      id:1,
      title: "How is Blockchain Shaping the Diamond Industry?",
      description:
        "The diamond industry is often associated with opulence and luxury, but it is also notorious for its lack of transparency and accountability. In recent years, blockchain technology has emerged as a game-changer in this industry.",
      writer: "writer Name",
      views: "2.5k",
      image: b1,
    },
    {      id:2,

      title: "How Blockchain Technology is Changing the Jewellery Industry?",
      description:
        "The blockchain is a digital ledger that records transactions between parties in a permanent way, allowing them to be tracked and verified. It’s this ability to track and verify transactions that makes it so useful for the jewellery industry.",
      views: "2.5k",
      image: b2,
    },
    {      id:3,

      title: "The Future of Jewellery Manufacturing and the Role of Technology",
      description:
        "Technology is changing the jewellery manufacturing industry at a rapid pace. The future of jewellery manufacturing will be all about using technology to create more efficient, cost-effective, innovative products.",
      writer: "writer Name",
      views: "2.5k",
      image: b3,
    },
    {      id:4,

      title: "Wearable NFTs — Everything There’s To Know About Them",
      description:
        "The world of fashion and jewelry is undergoing a transformation with the introduction of wearable NFTs. NFTs, or Non-Fungible Tokens, have been making waves in the art and collectibles world, but now they're starting to make their way into the world of fashion and jewelry.",
      writer: "writer Name",
      views: "2.5k",
      image: b4,
    },
    {      id:5,

      title: "Can NFTs Work for Luxury Jewellery?",
      description:
        "The most obvious place to start when considering the application of NFTs is luxury goods. Why? Because luxury goods are often characterised by their collectability, which lends itself well to the notion of scarcity and exclusivity.",
      writer: "writer Name",
      views: "2.5k",
      image: b5,
    },
  ];
  return (
    <>
      <Container>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <Web stories={stories} />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
          <Mobile stories={stories} />
        </Box>
      </Container>
    </>
  );
};

export default TopStories;
