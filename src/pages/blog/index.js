import React from "react";
import Slider from "./Slider/index.js";
import { Box } from "@mui/material";
import TopStories from "./topStories/index.js";
import AditionalStoriesLayout from "./AditionalStoriesLayout.js";

const Blog = () => {
  return (
    <>
      <Box sx={{ mt: 10 }} />
      <Slider />
      <TopStories />
      <AditionalStoriesLayout />
    </>
  );
};

export default Blog;
