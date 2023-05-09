import { Box, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography
          variant="h1"
          sx={{
            backgroundImage:
              "linear-gradient(90deg, #000000 -4.69%, #ECA830 48.02%, #000000 103.89%)",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: 400,
            fontSize: { xs: "35px", sm: "35px", md: "65px" },
          }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["Jewellery", "Gems"],
              pauseFor: 2000,
              cursorClassName: "Typewriter__cursor",
            }}
          />
          {"paired with NFTs"}
        </Typography>
      </Box>
    </>
  );
};

export default TypeAnimation;
