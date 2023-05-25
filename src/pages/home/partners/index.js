import React from "react";
import Centered from "../../../components/common/Centered";
import { Box, Typography } from "@mui/material";
import Headding from "../../../components/common/Headding";

import backgroundImage from "../../../assets/homePage/partners/background.png";
import bitsCrunch from "../../../assets/homePage/partners/bitsCrunch.png";
import unisot from "../../../assets/homePage/partners/unisot.png";
import tdefi from "../../../assets/homePage/partners/tdefi.png";
import quill from "../../../assets/homePage/partners/quill.png";

const Partners = () => {
  const partners = [bitsCrunch, unisot, tdefi, quill];
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
        {partners.map((partner, index) => (
          <Box
            sx={{
              mx: { xs: 2, sm: 5, md: 5 },
              width: { xs: "100px", sm: "150px", md: "200px" },
            }}
          >
            <img alt={`partner-${index}`} width="100%" src={partner} />
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <>
      <Centered>
        <Headding text="Partners" />
        <PartnersList />
      </Centered>
    </>
  );
};

export default Partners;
