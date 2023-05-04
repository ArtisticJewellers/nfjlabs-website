import { Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const Carousel = ({ children, onChange, center }) => {
  const settings = {
    dots: false, // hide the navigation dots
    arrows: true, // hide the navigation arrows
    infinite: true, // allow infinite loop
    speed: 500, // transition speed in milliseconds
    autoplay: true, // enable autoplay
    autoplaySpeed: 4000, // autoplay interval in milliseconds
    slidesToShow: 1, // number of slides to show at once
    slidesToScroll: 1, // number of slides to scroll at once
    afterChange: onChange ? onChange : () => {},
    // fade:true,
    // centerMode:center?true:false,
    // centerPadding:"10px"
  };

  return (
    // <Container>
      <Slider {...settings}>{children}</Slider>
    // </Container>
  );
};

export default Carousel;
