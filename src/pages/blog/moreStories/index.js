import React from "react";
import ms1 from "../../../assets/blog/moreStories/ms1.png";
import ms2 from "../../../assets/blog/moreStories/ms2.png";
import ms3 from "../../../assets/blog/moreStories/ms3.png";
import { Box, Typography } from "@mui/material";
import MoreStoriesCard from "./MoreStoriesCard";

const MoreStories = () => {
  const moreStories = [
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      date: "11 Sep, 2022",
      readTime: 5,
      image: ms1,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      date: "11 Sep, 2022",
      readTime: 5,
      image: ms2,
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur. ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing lor em dolo lorem ",
      writer: "writer Name",
      date: "11 Sep, 2022",
      readTime: 5,
      image: ms3,
    },
  ];
  return (
    <Box>
      <Typography sx={{ fontSize: "28px", fontWeight: 700, marginTop: 5 }}>
        More Stories
      </Typography>
      {moreStories.map((story) => (
        <MoreStoriesCard {...story} />
      ))}
    </Box>
  );
};

export default MoreStories;
