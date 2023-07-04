import React, { useEffect } from "react";
import Banner from "./Banner";
import Spacer from "../../components/common/Spacer";
import News from "../about/news";
import Introduction from "./Introduction";
import { useParams } from "react-router-dom";
import { teamMember } from "./teamMemberInfo";

const TeamDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  console.log("the id params is------->", id);
  console.log("the team member is-------->>>>>", teamMember);
  const memberInfo = teamMember[id - 1];
  console.log("the member info is-------->>>>", memberInfo);

  return (
    <>
      <Spacer size={50} />
      <Banner bg={memberInfo.banner} greeting={memberInfo.greetingImg} />
      <Introduction {...memberInfo} />
      <News />
    </>
  );
};

export default TeamDetails;
