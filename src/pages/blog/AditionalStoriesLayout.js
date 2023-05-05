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
        <Row>
          <Box width="75%">
            <MoreStories />
          </Box>
          <Box width="25%">
            <Trending />
            <Highlights />
          </Box>
        </Row>
      </Container>
    </>
  );
};

export default AditionalStoriesLayout;
