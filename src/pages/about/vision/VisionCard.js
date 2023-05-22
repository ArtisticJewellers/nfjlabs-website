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
          width: { xs: "100%", sm: "100%", md: "48%" },
          background: "#ffff",
          marginY: 1,
          borderRadius: "15px",
          paddingY: 3,
        }}
      >
        <Box>{/* <Typography>dev</Typography> */}</Box>
        <Box sx={{ width: "55%" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "15px", sm: "18px", md: "20px" },
            }}
          >
            {title}
          </Typography>
          <Spacer size={8} />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "10px", sm: "15px", md: "20px" },
              width: "90%",
            }}
          >
            {description}
          </Typography>
          <Spacer size={12} />
          {/* <Box display="inline"> */}
          <Row>
            <Typography
              color="primary"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "9px", sm: "15px", md: "20px" },
                cursor: "pointer",
              }}
            >
              Explore more
            </Typography>
            <East
              sx={{
                fontSize: { xs: "9px", sm: "15px", md: "20px" },
                color: "#F0A72C",
                marginX: 1,
              }}
            />
            <Box flexGrow={1} />
          </Row>
          {/* </Box> */}
        </Box>
      </Row>
    </>
  );
};

export default VisionCard;
