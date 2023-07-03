import React, { useEffect } from "react";
import Banner from "./Banner";
import Spacer from "../../components/common/Spacer";
import News from "../about/news";
import Introduction from "./Introduction";
import { useParams } from "react-router-dom";

const TeamDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  return (
    <>
      <Spacer size={50} />
      <Banner />
      <Introduction />
      <News />
    </>
  );
};

export default TeamDetails;
