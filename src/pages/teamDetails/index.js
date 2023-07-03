import React, { useEffect } from "react";
import Banner from "./Banner";
import Spacer from "../../components/common/Spacer";
import News from "../about/news";
import Introduction from "./Introduction";

const TeamDetails = () => {
  useEffect(() => {
    console.log("inside banner------>");
  }, []);
  return (
    <>
    <Spacer size={50}/>
      <Banner />
      <Introduction />
      <News />
    </>
  );
};

export default TeamDetails;
