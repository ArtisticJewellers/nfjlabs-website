import React from "react";
import Row from "../../../components/common/Row";
import { Box, Typography } from "@mui/material";
import Spacer from "../../../components/common/Spacer";
import { East } from "@mui/icons-material";
import Centered from "../../../components/common/Centered";
import truncateString from "../../../helpers/truncateString";

const VisionCard = ({ vision }) => {
  const { title, description, img } = vision;
  return (
    <>
      <Row
        sx={{
          width: { xs: "100%", sm: "100%", md: "48%" },
          background: "#ffff",
          marginY: 2,
          borderRadius: "20px",
          paddingY: 3,
          justifyContent: "space-evenly",
        }}
      >
        <Box width="30%">
          <Centered>
            <img src={img} width="100%" alt={title} />
          </Centered>
        </Box>
        <Box sx={{ width: "55%" }}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "15px", sm: "18px", md: "19px" },
            }}
          >
            {title}
          </Typography>
          <Spacer size={8} />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "10px", sm: "15px", md: "15px" },
              width: "90%",
            }}
          >
            {truncateString(description, 200)}
          </Typography>
          <Spacer size={12} />
          {/* <Box display="inline"> */}
          <Row>
            <Typography
              color="primary"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "9px", sm: "15px", md: "15px" },
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
