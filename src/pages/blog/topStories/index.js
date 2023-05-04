import React from "react";
import ts1 from "../../../assets/blog/topStories/ts1.png";
import ts2 from "../../../assets/blog/topStories/ts2.png";
import ts3 from "../../../assets/blog/topStories/ts3.png";
import ts4 from "../../../assets/blog/topStories/ts4.png";
import ts5 from "../../../assets/blog/topStories/ts5.png";
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
      image: ts1,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: ts2,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: ts3,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: ts4,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      views: "2.5k",
      image: ts5,
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
