import { Container, Typography } from "@mui/material";
import React from "react";
import Heading from "../../../components/common/Headding";
import TeamTabs from "./TeamTabs";
import Centered from "../../../components/common/Centered";
import TeamCard from "./TeamCard";
import Row from "../../../components/common/Row";
import Spacer from "../../../components/common/Spacer";

const Team = () => {
  return (
    <>
      <Container>
      <Spacer size={10} />
        <Centered>
          <Heading size="s1">Meet The Team</Heading>
        </Centered>
        <TeamTabs onChange={() => {}} />
        <Spacer size={10} />
        <Row
          sx={{
            flexWrap: "wrap",
            justifyContent: { xs: "space-evenly", sm: "space-between" },
          }}
        >

          <TeamCard />
          <TeamCard />
        </Row>
      </Container>
    </>
  );
};

export default Team;
