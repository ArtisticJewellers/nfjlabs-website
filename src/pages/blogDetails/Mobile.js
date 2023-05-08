import React from "react";
import TopStories from "../blog/topStories";
import { Box, Container, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Body from "./Body";

const Mobile = ({ blogDetail }) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${blogDetail.bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "400px",
          pt: 10,
          mb:2
        }}
      >
        {/* <Box sx={{ mt: 10 }} /> */}
        <IconButton>
          <ArrowBack color="secondary" />
        </IconButton>
      </Box>
      <Container>
        <Body {...blogDetail} />
      </Container>

      <TopStories />
    </>
  );
};

export default Mobile;
