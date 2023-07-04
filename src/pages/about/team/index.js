import { Container, Typography } from "@mui/material";
import React from "react";
import Heading from "../../../components/common/Headding";
import TeamTabs from "./TeamTabs";
import Centered from "../../../components/common/Centered";
import TeamCard from "./TeamCard";
import Row from "../../../components/common/Row";
import Spacer from "../../../components/common/Spacer";

//team members
import naman from "../../../assets/about/team/naman/naman.webp";
import alesio from "../../../assets/about/team/alessio/alessio.webp";
import devchand from "../../../assets/about/team/devchand/devchand.webp";

const Team = () => {
  const foundingTeamInfo = [
    { name: "Naman Siddharth", designation: "CEO & Founder", img: naman },
    { name: "Alessio Boschi", designation: "Founding Designer", img: alesio },
    {
      name: "Devchand Chodhry",
      designation: "Founding Jeweller",
      img: devchand,
    },
  ];

  return (
    <>
      <Container>
        <Spacer size={10} />
        <Centered>
          <Heading size="s1">Meet The Team</Heading>
        </Centered>
        <TeamTabs onChange={() => {}} />
        <Row
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "space-evenly", sm: "space-evenly" },
            marginY: 5,
          }}
        >
          {foundingTeamInfo.map((member, index) => (
            <TeamCard {...member} index={index} />
          ))}
          {/* <TeamCard />
          <TeamCard /> */}
        </Row>
      </Container>
    </>
  );
};

export default Team;
