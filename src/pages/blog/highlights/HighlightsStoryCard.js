import React from "react";
import Row from "../../../components/common/Row";
import { Box, Divider, Typography } from "@mui/material";
import Navigate from "../../../components/common/Navigate";
import truncateString from "../../../helpers/truncateString";

const HighlightsStoryCard = ({ title, timeAgo, views, image, id }) => {
  return (
    <>
      <Navigate to={`/blog/${id}`}>
        <Row sx={{ margin: 2 }}>
          <img
            alt={truncateString(title, 15)}
            src={image}
            height="72px"
            width="72px"
            style={{
              borderRadius: "5px",
              objectPosition: "left",
              objectFit: "cover",
            }}
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
      </Navigate>
    </>
  );
};

export default HighlightsStoryCard;
