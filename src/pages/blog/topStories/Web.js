import React from "react";
import Row from "../../../components/common/Row";
import { Box, Divider, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Navigate from "../../../components/common/Navigate";
import truncateString from "../../../helpers/truncateString";

const StoryCard = ({ title, writer, views, image, id }) => {
  return (
    <Box sx={{ width: "18%" }}>
      <Navigate to={`/blog/${id}`}>
        <img
          alt={truncateString(title, 15)}
          src={image}
          style={{ borderRadius: "5px" }}
          width="100%"
        />
        <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
          {truncateString(title, 30)}
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
      </Navigate>
    </Box>
  );
};

const Web = ({ stories }) => {
  return (
    <>
      <Typography sx={{ fontSize: "28px", fontWeight: 700, marginTop: 5 }}>
        Top Stories
      </Typography>
      <Row sx={{ marginTop: 1, marginBottom: 4 }}>
        {stories.map((story) => (
          <StoryCard {...story} />
        ))}
      </Row>
      <Divider />
    </>
  );
};

export default Web;
