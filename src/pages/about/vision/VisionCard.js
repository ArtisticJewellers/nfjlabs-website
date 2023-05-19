import React from "react";
import Row from "../../../components/common/Row";
import { Box, Typography } from "@mui/material";
import Spacer from "../../../components/common/Spacer";
import { East } from "@mui/icons-material";

const VisionCard = ({ vision }) => {
  const { title, description } = vision;
  return (
    <>
      <Row
        sx={{
          width: "48%",
          background: "#ffff",
          marginY: 1,
          borderRadius: "15px",
          paddingY: 3,
        }}
      >
        <Box>{/* <Typography>dev</Typography> */}</Box>
        <Box sx={{ width: "55%" }}>
          <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
            {title}
          </Typography>
          <Spacer size={8} />
          <Typography sx={{ fontWeight: 400, fontSize: "18px", width: "90%" }}>
            {description}
          </Typography>
          <Spacer size={12} />
          {/* <Box display="inline"> */}
          <Row sx={{ width: "35%" }}>
            <Typography
              color="primary"
              sx={{ fontWeight: 400, fontSize: "13px", cursor: "pointer" }}
            >
              Explore more
            </Typography>
            <East sx={{ fontSize: "13px", color: "#F0A72C" }} />
          </Row>
          {/* </Box> */}
        </Box>
      </Row>
    </>
  );
};

export default VisionCard;