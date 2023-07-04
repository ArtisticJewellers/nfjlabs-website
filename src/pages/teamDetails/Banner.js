import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";

const Banner = ({ bg, greeting }) => {
  useEffect(() => {
    console.log("inside banner------>");
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg})`,
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
            paddingTop: 25,
            paddingBottom: 10,
          }}
        >
          <Box sx={{ width: { xs: "300px", md: "400px" } }}>
            <img width="100%" src={greeting} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
