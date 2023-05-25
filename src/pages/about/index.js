import React from "react";
import OurVision from "./vision";
import { Box } from "@mui/material";
import Milestones from "./milestones";
import News from "./news";
import Team from "./team";

const About = () => {
  return (
    <>
      <Box sx={{ mt: 5 }} />
      <OurVision />
      <Milestones />
      <News />
      <Team />
    </>
  );
};

export default About;
