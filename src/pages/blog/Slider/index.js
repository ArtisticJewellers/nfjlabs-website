import React, { useState } from "react";
import slider1Bg from "../../../assets/blog/blogs/b1.webp";
import slider2Bg from "../../../assets/blog/blogs/b2.webp";
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
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const onSlideChange = (num) => {
  //   setCurrentSlide(num);
  // };

  return (
    <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
      <Carousel center>
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
      title: "How is Blockchain Shaping the Diamond Industry?",
      description:
        "The diamond industry is often associated with opulence and luxury, but it is also notorious for its lack of transparency and accountability. In recent years, blockchain technology has emerged as a game-changer in this industry. Blockchain, which is essentially a decentralized digital ledger,  can help track the journey of a diamond from its origin to its final destination, ensuring authenticity, ethical sourcing, and transparency throughout the supply chain.",
      bgImage: slider1Bg,
    },
    {
      title: "How Blockchain Technology is Changing the Jewellery Industry?",
      description:
        "Blockchain technology is changing the jewellery industry. It’s changing how we buy, sell and make jewellery. ",
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
