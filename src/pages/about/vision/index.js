import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Centered from "../../../components/common/Centered";
import Headding from "../../../components/common/Headding";
import Visions from "./Visions";

const OurVision = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: 5,
          background:
            "linear-gradient(106.61deg, rgba(255, 218, 164, 0.19) 8.3%, #FFF9EF 28.06%, rgba(255, 218, 164, 0.13) 48.66%, #FFF9EF 71.79%, rgba(255, 218, 164, 0.19) 89.02%)",
        }}
      >
        <Container>
          <Centered>
            <Headding text="Our Vision" />
            <Typography
              sx={{
                marginY: 3,
                textAlign: "center",
                fontSize: { xs: "10px", sm: "15px", md: "17px" },
              }}
            >
              Our vision is to redefine the jewellery industry, merging
              tradition with cutting-edge technology. NFJ Labs aims to create a
              future where jewellery transcends its physical form, embracing the
              boundless possibilities offered by Non-Fungible Tokens (NFTs).
              With a focus on security and preserving the exclusivity of
              jewellery, we strive to reshape the industry and ignite a new era
              of personalized connection.
            </Typography>
          </Centered>
          <Visions />
        </Container>
      </Box>
    </>
  );
};

export default OurVision;
