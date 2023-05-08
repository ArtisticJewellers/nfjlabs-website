import { Box, Typography } from "@mui/material";
import React from "react";
import ts1 from "../../../assets/blog/trendingStories/ts1.png";
import ts2 from "../../../assets/blog/trendingStories/ts2.png";
import ts3 from "../../../assets/blog/trendingStories/ts3.png";
import ts4 from "../../../assets/blog/trendingStories/ts4.png";
import HighlightsStoryCard from "./HighlightsStoryCard";

const Highlights = ({ blogDetail }) => {
  const trendingStories = [
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      views: "2.5k",
      image: ts1,
    },
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      readTime: 10,
      views: "2.5k",
      image: ts2,
    },
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      readTime: 10,
      views: "2.5k",
      image: ts3,
    },
    {
      title: " Lorem ipsum dolor siamet, consectetur lor em dolo.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      timeAgo: "10 mins ago",
      readTime: 10,
      views: "2.5k",
      image: ts4,
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
