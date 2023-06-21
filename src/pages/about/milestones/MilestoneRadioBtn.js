import React, { useState } from "react";
import { Box } from "@mui/material";
import Centered from "../../../components/common/Centered";
import Row from "../../../components/common/Row";
import idea from "../../../assets/about/milestones/idea.png";
import visit from "../../../assets/about/milestones/visit.png";
import website from "../../../assets/about/milestones/website.png";
import pastVisit from "../../../assets/about/milestones/pastVisit.png";
import sign from "../../../assets/about/milestones/sign.png";
import audit from "../../../assets/about/milestones/audit.png";

import ideaIn from "../../../assets/about/milestones/ideaIn.png";
import visitIn from "../../../assets/about/milestones/visitIn.png";
import websiteIn from "../../../assets/about/milestones/websiteIn.png";
import pastVisitIn from "../../../assets/about/milestones/pastVisitIn.png";
import signIn from "../../../assets/about/milestones/signIn.png";
import auditIn from "../../../assets/about/milestones/auditIn.png";

import Connector from "./Connector";

const MilestoneRadioBtn = ({ onChange }) => {
  const [activeBtn, setActiveBtn] = useState(0);
  const milestonesData = [
    { img: idea, inImg: ideaIn },
    { img: visit, inImg: visitIn },
    { img: website, inImg: websiteIn },
    { img: pastVisit, inImg: pastVisitIn },
    { img: sign, inImg: signIn },
    { img: audit, inImg: auditIn },
  ];

  const Milestone = ({ img, inImg, bg, index }) => {
    const onClick = () => {
      setActiveBtn(index);
      onChange(index);
    };
    return (
      <>
        <Box
          onClick={onClick}
          sx={{
            background: index == activeBtn ? "#BBBC8D" : "",
            height: { xs: "45px", sm: "70px", md: "100px", lg: "150px" },
            width: { xs: "45px", sm: "70px", md: "100px", lg: "150px" },
            borderRadius: "50%",
            cursor: "pointer",
            border: "4px solid #D4D4B6",
            transition: {
              backgroundColor: {
                duration: "0.5s",
                easing: "ease-in-out",
              },
            },
          }}
        >
          <Centered bothAxis>
            <img src={index == activeBtn ? img : inImg} width="35%" alt="milestone-icon" />
          </Centered>
        </Box>
      </>
    );
  };
  return (
    <>
      <Row sx={{ justifyContent: "center" }}>
        {milestonesData.map((data, index) => (
          <>
            <Milestone {...data} index={index} />
            {index < milestonesData.length - 1 ? (
              <>
                <Box flexGrow={1} />
                <Connector color={`${data.bg}50`} />
                <Box flexGrow={1} />
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </Row>
    </>
  );
};

export default MilestoneRadioBtn;
