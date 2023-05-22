import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Row from "../../../components/common/Row";
import Avatar from "../../../components/common/Avatar";
import Spacer from "../../../components/common/Spacer";
import truncateString from "../../../helpers/truncateString";
import Navigate from "../../../components/common/Navigate";

const MoreStoriesCard = ({
  title,
  description,
  writer,
  date,
  readTime,
  image,
  id
}) => {
  return (
    <>
    <Navigate to={`/blog/${id}`}>
      <Box sx={{ marginY: 5 }}>
        <Row>
          <Box width="60%">
            <Row sx={{ justifyContent: "start" }}>
              <Avatar size={25} text="AN" />
              <Spacer row size={10} />
              <Typography sx={{ fontWeight: 600, fontSize: "19px" }}>
                {writer}
              </Typography>
            </Row>
            <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
              {title}
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "15px",
                color: "#808080",
                marginY: 1,
              }}
            >
              {truncateString(description,100)}
            </Typography>
            <Row sx={{ justifyContent: "start", marginY: 1 }}>
              <Typography
                sx={{ fontWeight: 500, fontSize: "15px", color: "#808080" }}
              >
                {date}
              </Typography>
              <Spacer row size={50} />
              <Typography
                sx={{ fontWeight: 500, fontSize: "15px", color: "#808080" }}
              >{`${readTime} mins read`}</Typography>
            </Row>
          </Box>
          <img
            width="160px"
            height="160px"
            src={image}
            style={{
              borderRadius: "5px",
              objectPosition: "left",
              objectFit: "cover",
            }}
          />
        </Row>
      </Box>
      <Divider />
      </Navigate>
    </>
  );
};

export default MoreStoriesCard;
