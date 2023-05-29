import React from "react";
import Banner from "../Banner";
import Body from "./Body";
import blogImage from "../../../../assets/blog/blogs/b4.webp";

const B4 = () => {
  const bannerDetails = {
    title: "Wearable NFTs — Everything There’s To Know About Them",
    description:
      "The world of fashion and jewelry is undergoing a transformation with the introduction of wearable NFTs. NFTs, or Non-Fungible Tokens, have been making waves in the art and collectibles world, but now they're starting to make their way into the world of fashion and jewelry. This new trend is shaking up the traditional jewelry industry and offering a unique and exciting way to own and display wearable pieces.",
    bgImage: blogImage,
    writer: "Writer Name",
  };
  return (
    <>
      <Banner bannerDetails={bannerDetails} />
      <Body />
    </>
  );
};

export default B4;
