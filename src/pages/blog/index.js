import React from "react";
import Slider from "./Slider/index.js";
import { Box } from "@mui/material";
import TopStories from "./topStories/index.js";
import AditionalStoriesLayout from "./AditionalStoriesLayout.js";
import Subscribe from "./subscribe/index.js";

const Blog = () => {
  return (
    <>
      <Box sx={{ mt: 10 }} />
      <Slider />
      <TopStories />
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <AditionalStoriesLayout />
      </Box>
      <Subscribe />
    </>
  );
};

export default Blog;
