import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import MilestoneRadioBtn from "./MilestoneRadioBtn";
import MilestoneInfo from "./MilestoneInfo";
import Centered from "../../../components/common/Centered";
import Headding from "../../../components/common/Headding";

const Milestones = () => {
  const milestonesData = [
    {
      title: "July 2022",
      list: ["NFJ Labs concept was ideated for the first time "],
    },
    {
      title: "Sepember 2022",
      list: [
        "Visited Vicenzaro in Italy",
        "Talked to artists and gathered information: During the visit to Vicenzaro in Italy",
      ],
    },
    {
      title: "December 2022",
      list: [
        "Website launch: Sometime in December (specific date not provided)",
        "Metaverse POC ready: Sometime in December (specific date not provided)",
        "incubate",
      ],
    },
    {
      title: "January 2023",
      list: [
        "Visited Vicenzaoro: Sometime in the past ",
        "Experience in the virtual way in metaverse",
        "new collaborations happened",
      ],
    },
    {
      title: "March 2023",
      list: [
        "MOU sign with Pearl Pharma in Bahrain",
        "MOU sign with European sports jewellery company",
      ],
    },
    {
      title: "May 2023",
      list: [
        "MOUs were signed with Web3 merch company for silver coins",
        "Smart contracts were audited by Quill Audits",
        "Beta version of NFT Marketplace was made live",
      ],
    },
  ];
  const [milestoneInfo, setMilestoneInfo] = useState(milestonesData[0]);
  return (
    <>
      <Container sx={{paddingY:5}}>
        <Centered>
          <Headding color="#F0A72C" size="s1">
            Our Milestones
          </Headding>
        </Centered>
        <MilestoneRadioBtn
          onChange={(index) => {
            setMilestoneInfo(milestonesData[index]);
          }}
        />
        <MilestoneInfo {...milestoneInfo} />
      </Container>
    </>
  );
};

export default Milestones;
