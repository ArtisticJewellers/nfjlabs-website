import { Box, Typography } from "@mui/material";
import React from "react";
import b1 from "../../../assets/blog/blogs/b1.jpg";
import b2 from "../../../assets/blog/blogs/b2.jpg";
import b3 from "../../../assets/blog/blogs/b3.jpg";
import b4 from "../../../assets/blog/blogs/b4.jpg";
import HighlightsStoryCard from "./HighlightsStoryCard";

const Highlights = ({ blogDetail }) => {
  const trendingStories = [
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      views: "2.5k",
      image: b1,
    },
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      readTime: 10,
      views: "2.5k",
      image: b2,
    },
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      readTime: 10,
      views: "2.5k",
      image: b3,
    },
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      readTime: 10,
      views: "2.5k",
      image: b4,
    },
  ];
  return (
    <>
      <Typography
        sx={{
          fontSize: "28px",
          fontWeight: 700,
          marginTop: blogDetail ? 0 : 5,
        }}
      >
        Highlights
      </Typography>
      <Box sx={{ border: "1px solid #cfceca", borderRadius: "10px" }}>
        {trendingStories.map((story) => (
          <HighlightsStoryCard {...story} />
        ))}
      </Box>
    </>
  );
};

export default Highlights;
