import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";
import img from "../../assets/blog/slider/slider1.png";
import { Box } from "@mui/material";
import B1 from "./blogs/b1";
import TopStories from "../blog/topStories";
import B2 from "./blogs/b2";
import B3 from "./blogs/b3";
import B4 from "./blogs/b4";

const BlogDetails = () => {
  return (
    <>
      {/* <B1 /> */}
      {/* <B2 /> */}
      {/* <B3 /> */}
      <B4 />
      <TopStories />
    </>
  );
};

export default BlogDetails;
