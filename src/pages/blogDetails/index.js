import React, { useEffect, useState } from "react";
import B1 from "./blogs/b1";
import TopStories from "../blog/topStories";
import B2 from "./blogs/b2";
import B3 from "./blogs/b3";
import B4 from "./blogs/b4";
import B5 from "./blogs/b5";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = [B1, B2, B3, B4, B5];
  let Blog = B1;
  if (id <= blogs.length && id > 0) {
    Blog = blogs[id - 1];
  }

  return (
    <>
      <Blog />
      <TopStories />
    </>
  );
};

export default BlogDetails;
