import React from "react";
import Row from "../../components/common/Row";
import MoreStories from "./moreStories";
import { Box, Container } from "@mui/material";
import Trending from "./trending";
import Highlights from "./highlights";

const AditionalStoriesLayout = () => {
  return (
    <>
      <Container>
        <Row sx={{alignItems:"start"}}>
          <Box width="70%">
            <MoreStories />
          </Box>
          <Box width="27%" alignSelf="start">
            <Trending />
            <Highlights />
          </Box>
        </Row>
      </Container>
    </>
  );
};

export default AditionalStoriesLayout;
