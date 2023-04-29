import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Centered from "../../../components/common/Centered";

import backgroundImage from "../../../assets/homePage/collaborations/webBackground.png";

const Web = ({ collaborators }) => {
  useEffect(() => {
    console.log("the collaborators are ----->", collaborators);
  }, []);

  const DisplayCollab = ({ name, image }) => {
    console.log("inside collab----->", name);
    return (
      <>
        <Box
          sx={{
            marginY: "76px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img width="187px" src={image} />
          <Typography
            sx={{ fontWeight: 700, fontSize: "33px", color: "#84592C" }}
          >
            {name}
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <Centered>

      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {collaborators.map((collaborator) => (
          <DisplayCollab {...collaborator} />
        ))}
      </Box>
    </Centered>
  );
};

export default Web;
