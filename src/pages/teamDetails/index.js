import React, { useEffect } from "react";
import Banner from "./Banner";
import Spacer from "../../components/common/Spacer";

const TeamDetails = () => {
  useEffect(() => {
    console.log("inside banner------>");
  }, []);
  return (
    <>
    <Spacer size={50}/>
      <Banner />
    </>
  );
};

export default TeamDetails;
