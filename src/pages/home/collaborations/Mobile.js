import { Box, Typography } from "@mui/material";
import React from "react";

import backgroundImage from "../../../assets/homePage/collaborations/mobileBackground.png";
import Carousel from "../../../components/common/Carousel.js";

const Mobile = ({ collaborators }) => {
  const DisplayCollab = ({ name, image }) => {
    return (
      <>
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: "10px",
            paddingY: 2,
            marginX: 1,
          }}
        >
          <Box
            sx={{
              marginY: { xs: "30px", sm: "40px", md: "40px" },
              marginX: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { xs: "70px", sm: "100px", md: "100px" } }}>
              <img alt={name} width="100%" src={image} />
            </Box>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: "15px", sm: "20px", md: "20px" },
                color: "#84592C",
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </>
    );
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Carousel slidesToShow={2}>
            {collaborators.map((collaborator) => (
              <DisplayCollab {...collaborator} />
            ))}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default Mobile;
