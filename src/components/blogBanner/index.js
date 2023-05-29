import { Adjust, ExpandCircleDown } from "@mui/icons-material";
import { Box, Chip, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import Spacer from "../common/Spacer";

const BlogBanner = ({ slide, clickable }) => {
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    } else {
      return str;
    }
  }
  const { title, description, bgImage } = slide;

  const UpdateChip = () => {
    return (
      <Chip
        sx={{
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-evenly",
          pr: "10px",
          paddingY: "2px",
        }}
        label="Update"
        color="secondary"
        icon={<Adjust color="error" />}
      />
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        color: "white",
        height: "400px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, transparent,transparent, rgba(0, 0, 0, 10))",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80%",
            paddingY: "10px",
          }}
        >
          <UpdateChip />
          <Box sx={{ width: "100%", alignSelf: "end" }}>
            <Spacer size={10} />

            {/* TITLE */}
            {/* <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "20px", sm: "30", md: "60px" },
              }}
            >
              {truncateString(title, 30)}
            </Typography> */}
          </Box>
          <Box sx={{ display: clickable ? "block" : "none" }}>
            <IconButton color="secondary">
              <ExpandCircleDown sx={{ transform: "rotate(270deg)" }} />
            </IconButton>
          </Box>

          {/* </Box> */}
        </Container>
        <Container>
          <Typography>{truncateString(description, 250)}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default BlogBanner;
