import React from "react";
import Banner from "../Banner";
import Body from "./Body";
import blogImage from "../../../../assets/blog/blogs/b3.webp";

const B3 = () => {
  const bannerDetails = {
    title: "The Future of Jewellery Manufacturing and the Role of Technology",
    description:
      "Technology is changing the jewellery manufacturing industry at a rapid pace. The future of jewellery manufacturing will be all about using technology to create more efficient, cost-effective, innovative products.",
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

export default B3;
