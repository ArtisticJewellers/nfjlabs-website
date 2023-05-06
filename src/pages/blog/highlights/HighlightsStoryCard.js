import React from "react";
import Row from "../../../components/common/Row";
import { Box, Divider, Typography } from "@mui/material";

const HighlightsStoryCard = ({ title, timeAgo, views, image }) => {
  return (
    <>
      <Row sx={{ margin: 2 }}>
        <img
          src={image}
          height="72px"
          width="72px"
          style={{ borderRadius: "5px" }}
        />
        <Box sx={{ width: "70%" }}>
          <Row>
            <Typography
              sx={{ fontSize: "10px" }}
            >{`${views} views`}</Typography>
            <Typography sx={{ fontSize: "10px" }}>{`${timeAgo}`}</Typography>
          </Row>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 600, marginTop: "5px" }}
          >
            {title}
          </Typography>
        </Box>
      </Row>
      <Divider />
    </>
  );
};

export default HighlightsStoryCard;