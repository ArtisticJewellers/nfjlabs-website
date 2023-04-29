import React from "react";
import Centered from "../../../components/common/Centered";
import { Box, Typography } from "@mui/material";

import backgroundImage from "../../../assets/homePage/partners/background.png";
import bitsCrunch from "../../../assets/homePage/partners/bitsCrunch.png";
import unisot from "../../../assets/homePage/partners/unisot.png";
import tdefi from "../../../assets/homePage/partners/tdefi.png";

const Partners = () => {
  const PartnersList = () => {
    return (
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            mx: { xs: 2, sm: 5, md: 5 },
            width: { xs: "100px", sm: "150px", md: "200px" },
          }}
        >
          <img width="100%" src={bitsCrunch} />
        </Box>
        <Box
          sx={{
            mx: { xs: 2, sm: 5, md: 5 },
            width: { xs: "100px", sm: "150px", md: "200px" },
          }}
        >
          <img width="100%" src={unisot} />
        </Box>
        <Box
          sx={{
            mx: { xs: 2, sm: 5, md: 5 },
            width: { xs: "100px", sm: "150px", md: "200px" },
          }}
        >
          <img width="100%" src={tdefi} />
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Centered>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "25px", sm: "35px", md: "48px" },
            marginY: { xs: "10px", sm: "20px", md: "20px" },
          }}
        >
          Partners
        </Typography>
        <PartnersList />
      </Centered>
    </>
  );
};

export default Partners;
