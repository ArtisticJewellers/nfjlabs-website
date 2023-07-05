import React from "react";
import Body from "./Body";
import blogImage from "../../../../assets/blog/blogs/b1.webp";
import Banner from "../Banner";

const B1 = () => {
  const bannerDetails = {
    title: "How is Blockchain Shaping the Diamond Industry?",
    description:
      "The diamond industry is often associated with opulence and luxury, but it is also notorious for its lack of transparency and accountability. In recent years, blockchain technology has emerged as a game-changer in this industry. Blockchain, which is essentially a decentralized digital ledger, can help track the journey of a diamond from its origin to its final destination, ensuring authenticity, ethical sourcing, and transparency throughout the supply chain.",
    bgImage: blogImage,
    writer: "Pallavi Narang",
  };
  return (
    <>
      <Banner bannerDetails={bannerDetails}  />
      <Body />
    </>
  );
};

export default B1;
