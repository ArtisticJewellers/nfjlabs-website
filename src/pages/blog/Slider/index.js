import React, { useState } from "react";
import slider1Bg from "../../../assets/blog/slider/slider1.png";
import slider2Bg from "../../../assets/blog/slider/slider2.png";
import Carousel from "../../../components/common/Carousel.js.js";
import Slide from "./slide";
import { Box, Container, Typography } from "@mui/material";
import Row from "../../../components/common/Row";
import Avatar from "../../../components/common/Avatar";

const WebCarousel = ({ slidesData }) => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Carousel>
          {slidesData.map((slide) => (
            <Slide web slide={slide} />
          ))}
        </Carousel>
      </Box>
    </>
  );
};

const MobileCarousel = ({ slidesData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const onSlideChange = (num) => {
    setCurrentSlide(num);
  };

  return (
    <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
      <Carousel center onChange={onSlideChange}>
        {slidesData.map((slide) => (
          <Slide slide={slide} />
        ))}
      </Carousel>
      {/* <Typography sx={{ fontWeight: 500, fontSize: "14px", color: "#2E2E2E" }}>
        {slidesData[currentSlide].title}
      </Typography>
      <Row sx={{marginY:1}}>
        <Row>
          <Avatar text="WN" size={28} />
          <Typography sx={{ fontSize: 12, marginLeft: 1, color: "#2E2E2E" }}>
            Writer name
          </Typography>
        </Row>

        <Typography sx={{ fontSize: 11,color:"#1E1E1E" }}>2 hours ago</Typography>
      </Row> */}
    </Box>
  );
};
const Slider = () => {
  const slidesData = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua ut enim ad minim veniam. ",
      bgImage: slider1Bg,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit 2",
      description:
        "elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua ut enim ad minim veniam. ",
      bgImage: slider2Bg,
    },
  ];

  return (
    <>
      <Container>
        {/* WEB */}
        <WebCarousel slidesData={slidesData} />
        {/* MOBILE */}
        <MobileCarousel slidesData={slidesData} />
      </Container>
    </>
  );
};

export default Slider;
