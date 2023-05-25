import { Box } from "@mui/material";
import React from "react";
import Row from "../../../components/common/Row";
import VisionCard from "./VisionCard";

import v1 from "../../../assets/about/visions/v1.png";
import v2 from "../../../assets/about/visions/v2.png";
import v3 from "../../../assets/about/visions/v3.png";
import v4 from "../../../assets/about/visions/v4.png";

const Visions = () => {
  const visions = [
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
      img: v1,
    },
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
      img: v2,
    },
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
      img: v3,
    },
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
      img: v4,
    },
  ];

  return (
    <>
      <Row sx={{ width: "100%", flexWrap: "wrap" }}>
        {visions.map((vision) => (
          <VisionCard vision={vision} />
        ))}
      </Row>
    </>
  );
};

export default Visions;
