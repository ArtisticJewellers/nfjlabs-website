import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";
import img from "../../assets/blog/slider/slider1.png";
import { Box } from "@mui/material";
import B1 from "./blogs/b1";
import TopStories from "../blog/topStories";
import B2 from "./blogs/b2";

const BlogDetails = () => {
  return (
    <>
      {/* <B1 /> */}
      <B2 />
      <TopStories />
    </>
  );
};

export default BlogDetails;
