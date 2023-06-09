import { Box, Typography } from "@mui/material";
import React from "react";
import Row from "../../../../components/common/Row";
import Avatar from "../../../../components/common/Avatar";
import Centered from "../../../../components/common/Centered";

const Mobile = ({ slide }) => {
  const { title, description, bgImage } = slide;

  return (
    <>
      <Centered>
        <img
          src={bgImage}
          width="95%"
          style={{ borderRadius: "10px", marginX: "10px" }}
        />

        <Box marginTop={1} sx={{ marginX: 1 }}>
          <Typography
            sx={{ fontWeight: 500, fontSize: "14px", color: "#2E2E2E" }}
          >
            {title}
          </Typography>
          <Row sx={{ marginY: 1 }}>
            <Row>
              <Avatar text="WN" size={28} />
              <Typography
                sx={{ fontSize: 12, marginLeft: 1, color: "#2E2E2E" }}
              >
                Writer name
              </Typography>
            </Row>

            <Typography sx={{ fontSize: 11, color: "#808080" }}>
              2 hours ago
            </Typography>
          </Row>
        </Box>
      </Centered>
    </>
  );
};

export default Mobile;
