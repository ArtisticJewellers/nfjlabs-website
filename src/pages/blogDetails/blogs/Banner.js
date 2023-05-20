import { Box, Button, Container, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import BlogBanner from "../../../components/blogBanner";
import { ArrowBack } from "@mui/icons-material";
import Row from "../../../components/common/Row";
import Avatar from "../../../components/common/Avatar";
import Spacer from "../../../components/common/Spacer";

const Banner = ({ bannerDetails }) => {
  const { title, writer, bgImage, description } = bannerDetails;
  const Web = () => {
    return (
      <>
        <Box sx={{ mt: 10 }} />
        <Container>
          <BlogBanner slide={bannerDetails} />
        </Container>
      </>
    );
  };
  const Mobile = () => {
    return (
      <>
        <Box
          sx={{
            backgroundImage: `url(${bannerDetails.bgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left",
            backgroundSize: "cover",
            height: "400px",
            pt: 10,
            mb: 2,
          }}
        >
          <IconButton>
            <ArrowBack color="secondary" />
          </IconButton>
        </Box>
        <>
        <Container>
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
          </Container>
        </>
      </>
    );
  };

  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <Web />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
        <Mobile />
      </Box>
    </>
  );
};

export default Banner;
