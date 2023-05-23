import React from "react";
import OurVision from "./vision";
import { Box } from "@mui/material";
import Milestones from "./milestones";
import News from "./news";

const About = () => {
  return (
    <>
      <Box sx={{ mt: 10 }} />

      <OurVision />
      <Milestones />
      <News />
    </>
  );
};

export default About;
