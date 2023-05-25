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
import connector from "../../../assets/about/milestones/connector.svg";
import Connector from "./Connector";

const MilestoneRadioBtn = ({ onChange }) => {
  const [activeBtn, setActiveBtn] = useState(0);
  const milestonesData = [
    { img: idea, bg: "#FDA53C" },
    { img: visit, bg: "#E14956" },
    { img: website, bg: "#8C103E" },
    { img: pastVisit, bg: "#64D0DB" },
    { img: sign, bg: "#33B1E4" },
    { img: audit, bg: "#065382" },
  ];

  const Milestone = ({ img, bg, index }) => {
    const onClick = () => {
      setActiveBtn(index);
      onChange(index);
    };
    return (
      <>
        <Box
          onClick={onClick}
          sx={{
            background: index == activeBtn ? bg : `${bg}75`,
            height: { xs: "45px", sm: "70px", md: "100px", lg: "150px" },
            width: { xs: "45px", sm: "70px", md: "100px", lg: "150px" },
            borderRadius: "50%",
            cursor: "pointer",
            transition: {
              backgroundColor: {
                duration: "0.5s",
                easing: "ease-in-out",
              },
            },
          }}
        >
          <Centered bothAxis>
            <img src={img} width="35%" alt="milestone-icon" />
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
