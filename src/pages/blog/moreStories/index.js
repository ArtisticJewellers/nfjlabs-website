import React from "react";
import ms1 from "../../../assets/blog/blogs/b1.jpg";
import ms2 from "../../../assets/blog/blogs/b2.jpg";
import ms3 from "../../../assets/blog/blogs/b3.jpg";
import { Box, Typography } from "@mui/material";
import MoreStoriesCard from "./MoreStoriesCard";

const MoreStories = () => {
  const moreStories = [
    {
      title: "How is Blockchain Shaping the Diamond Industry?",
      description:
        "The diamond industry is often associated with opulence and luxury, but it is also notorious for its lack of transparency and accountability. In recent years, blockchain technology has emerged as a game-changer in this industry.",
      writer: "writer Name",
      date: "11 Sep, 2022",
      readTime: 5,
      image: ms1,
    },
    {
      title: "How Blockchain Technology is Changing the Jewellery Industry?",
      description:
        "The blockchain is a digital ledger that records transactions between parties in a permanent way, allowing them to be tracked and verified. It’s this ability to track and verify transactions that makes it so useful for the jewellery industry.",
      writer: "writer Name",
      date: "11 Sep, 2022",
      readTime: 5,
      image: ms2,
    },
    {
      title: "The Future of Jewellery Manufacturing and the Role of Technology",
      description:
        "Technology is changing the jewellery manufacturing industry at a rapid pace. The future of jewellery manufacturing will be all about using technology to create more efficient, cost-effective, innovative products.",
      writer: "writer Name",
      date: "11 Sep, 2022",
      readTime: 5,
      image: ms3,
    },
  ];
  return (
    <Box>
      <Typography sx={{ fontSize: "28px", fontWeight: 700, marginTop: 5 }}>
        More Stories
      </Typography>
      {moreStories.map((story) => (
        <MoreStoriesCard {...story} />
      ))}
    </Box>
  );
};

export default MoreStories;
