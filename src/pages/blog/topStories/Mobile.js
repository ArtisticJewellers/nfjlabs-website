import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Row from "../../../components/common/Row";
import Navigate from "../../../components/common/Navigate";
import truncateString from "../../../helpers/truncateString";

const StoryCard = ({ title, description, writer, views, image, id }) => {
  return (
    <>
      <Navigate to={`/blog/${id}`}>
        <Row sx={{ marginY: 3 }}>
          <Box width="70%">
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>
              {title}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "10px",
                color: "#808080",
                marginY: 1,
              }}
            >
              {truncateString(description, 200)}
            </Typography>
            <Row sx={{ marginY: 1 }}>
              <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
                {writer}
              </Typography>
              <Typography sx={{ fontSize: "10px", color: "#808080" }}>
                2hours ago
              </Typography>
            </Row>
          </Box>
          <img
            alt={truncateString(title, 15)}
            src={image}
            height="86px"
            width="86px"
            style={{
              borderRadius: "5px",
              objectPosition: "left",
              objectFit: "cover",
            }}
          />
        </Row>
        <Divider />
      </Navigate>
    </>
  );
};
const Mobile = ({ stories }) => {
  return (
    <>
      <Box marginTop={2}>
        <Divider />
        <Typography
          sx={{
            borderLeft: "2px solid #0079E9",
            paddingX: 1,
            fontSize: "14px",
            fontWeight: 600,
            marginY: 2,
            paddingY: 1,
          }}
        >
          Latest News
        </Typography>
        {stories.map((story) => (
          <StoryCard {...story} />
        ))}
      </Box>
    </>
  );
};

export default Mobile;
