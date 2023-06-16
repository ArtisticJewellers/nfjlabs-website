import React from "react";
import Banner from "./banner";
import Artists from "./artists";
import Marketplace from "./marketplace";
import Metaverse from "./Metaverse";
import Features from "./features";
import Collaborations from "./collaborations";
import Partners from "./partners";
import FAQ from "./faq";
import Footer from "./footer";
import Gallery from "./gallery";
import Stats from "./stats";

const Home = () => {
  return (
    <>
      <Banner />
      <Stats />
      <Features />
      <Marketplace />
      <Metaverse />
      <Artists />
      <Collaborations />
      <Partners />
      {/* <Gallery /> */}
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
