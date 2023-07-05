import React from "react";
import Banner from "../Banner";
import Body from "./Body";
import blogImage from "../../../../assets/blog/blogs/b2.webp";

const B2 = () => {
  const bannerDetails = {
    title: "How Blockchain Technology is Changing the Jewellery Industry?",
    description:
      "Blockchain technology is changing the jewellery industry. It’s changing how we buy, sell and make jewellery.The blockchain is a digital ledger that records transactions between parties in a permanent way, allowing them to be tracked and verified. It’s this ability to track and verify transactions that makes it so useful for the jewellery industry.",
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

export default B2;
