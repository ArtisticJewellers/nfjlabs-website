import React from "react";
import Row from "../../../components/common/Row";
import { Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const StoryCard = ({ title, writer, views, image }) => {
  return (
    <Box sx={{ width: "18%" }}>
      <img src={image} style={{ borderRadius: "5px" }} width="100%" />
      <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
        {title}
      </Typography>
      <Row sx={{ justifyContent: "start" }}>
        <Typography sx={{ fontSize: "13px", color: "#808080" }}>
          {writer}
        </Typography>
        <CheckCircle sx={{ fontSize: "18px", marginLeft: 2 }} />
      </Row>
      <Row>
        <Typography sx={{ fontSize: "13px", color: "#808080" }}>
          {`${views} views`}
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "#808080" }}>
          2hours ago
        </Typography>
      </Row>
    </Box>
  );
};

const Web = ({ stories }) => {
  return (
    <Row sx={{ marginTop: 5 }}>
      {stories.map((story) => (
        <StoryCard {...story} />
      ))}
    </Row>
  );
};

export default Web;
