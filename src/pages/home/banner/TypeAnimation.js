import { Box, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        variant="h1"
        sx={{
          display: "flex", // add this line
          alignItems: "center", // add this line
          backgroundImage:
            "linear-gradient(90deg, #000000 -4.69%, #ECA830 48.02%, #000000 103.89%)",
          backgroundClip: "text",
          color: "transparent",
          fontWeight: 400,
          fontSize: { xs: "25px", sm: "35px", md: "65px" },
        }}
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["Jewellery", "Gems", "Coins"],
            pauseFor: 2000,
            cursorClassName: "Typewriter__cursor",
          }}
        />
        <Typography
          variant="h1"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "25px", sm: "35px", md: "65px" },
          }}
        >
          paired with NFTs
        </Typography>
      </Typography>
    </Box>
  );
};

export default TypeAnimation;
