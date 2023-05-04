import React from "react";
import Web from "./Web";
import Mobile from "./Mobile";

const Slide = ({ web, slide }) => {
  return web ? <Web slide={slide} /> : <Mobile slide={slide} />;
};

export default Slide;
