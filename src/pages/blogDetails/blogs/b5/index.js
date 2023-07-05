import React from "react";
import Banner from "../Banner";
import Body from "./Body";
import blogImage from "../../../../assets/blog/blogs/b5.webp";

const B5 = () => {
  const bannerDetails = {
    title: "Can NFTs Work for Luxury Jewellery?",
    description:
      "The most obvious place to start when considering the application of NFTs is luxury goods. Why? Because luxury goods are often characterised by their collectability, which lends itself well to the notion of scarcity and exclusivity.",
    bgImage: blogImage,
    writer: "Pallavi Narang",
  };
  return (
    <>
      <Banner bannerDetails={bannerDetails} />
      <Body />
    </>
  );
};

export default B5;
