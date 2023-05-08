import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import Highlights from "../blog/highlights";
import Row from "../../components/common/Row";
import Avatar from "../../components/common/Avatar";
import Spacer from "../../components/common/Spacer";

const Body = ({ title, description, web, writer }) => {
  const Web = () => {
    return (
      <Box sx={{ marginTop: 5 }}>
        <Box sx={{ float: "right", width: "30%", ml: 5, mb: 2 }}>
          <Highlights blogDetail />
        </Box>
        <Typography sx={{ fontSize: "46px", fontWeight: 600 }}>
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: 500,
            wordWrap: "break-word",
            color: "#A1A1A1",
          }}
        >
          {description}
        </Typography>
      </Box>
    );
  };
  const Mobile = () => {
    return (
      <>
        <Typography sx={{ fontWeight: 600, fontSize: "20px" }}>
          {title}
        </Typography>
        <Row sx={{ marginY: 2 }}>
          <Row>
            <Avatar text="AN" size={35} />
            <Spacer row size={10} />
            <Box>
              <Typography
                sx={{ fontWeight: 600, fontSize: "10px", color: "#2E2E2E" }}
              >
                {writer}
              </Typography>
              <Typography
                sx={{ fontWeight: 500, fontSize: "9px", color: "#808080" }}
              >
                2 hours ago
              </Typography>
            </Box>
          </Row>

          <Button variant="contained">Subscribe</Button>
        </Row>
        <Divider />
        <Typography sx={{ fontWeight: 500, fontSize: "12px",color: "#808080",marginY:1 }}>
          {description}
        </Typography>
      </>
    );
  };
  return web ? <Web /> : <Mobile />;
};

export default Body;
