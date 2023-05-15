import { Box } from "@mui/material";
import React from "react";
import Row from "../../../components/common/Row";
import VisionCard from "./VisionCard";

const Visions = () => {
  const visions = [
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
    },
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
    },
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
    },
    {
      title: "Vision Title",
      description:
        "Lorem ipsum dolor sit amet consectetur. Dignissim ornare placerat egestas magna purus",
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
