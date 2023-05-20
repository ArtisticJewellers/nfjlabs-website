import React from "react";
import b1 from "../../../assets/blog/blogs/b1.jpg";
import b2 from "../../../assets/blog/blogs/b2.jpg";
import b3 from "../../../assets/blog/blogs/b3.jpg";
import b4 from "../../../assets/blog/blogs/b4.jpg";
import b5 from "../../../assets/blog/blogs/b5.jpg";
import Row from "../../../components/common/Row";
import Web from "./Web";
import { Box, Container } from "@mui/material";
import Mobile from "./Mobile";

const TopStories = () => {
  const stories = [
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: b1,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: b2,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: b3,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: b4,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
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
