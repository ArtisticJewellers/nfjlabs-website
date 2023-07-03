import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import backgroundImage from "../../assets/about/team/naman/banner.png";
import greetings from "../../assets/about/team/naman/greetings.png";

const Banner = () => {
  useEffect(() => {
    console.log("inside banner------>");
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            // padding: 5,
            paddingTop: 25,
            paddingBottom:10
          }}
        >
          <Box sx={{ width: { xs: "300px", md: "400px" } }}>
            <img width="100%" src={greetings} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
