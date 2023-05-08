import React from "react";
import { Box, Container } from "@mui/material";
import BlogBanner from "../../components/blogBanner";
import Row from "../../components/common/Row";
import Body from "./Body";
import TopStories from "../blog/topStories";

const Web = ({blogDetail}) => {

  return (
    <>
      <Box sx={{ mt: 10 }} />

      <Container>
        <BlogBanner slide={blogDetail} />
        <Row></Row>
        <Body {...blogDetail} />
      </Container>
      <TopStories />
    </>
  );
};

export default Web;
