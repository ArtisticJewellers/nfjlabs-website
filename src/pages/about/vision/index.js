import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Centered from "../../../components/common/Centered";
import Headding from "../../../components/common/Headding";
import Visions from "./Visions";
import backgroundImage from "../../../assets/about/visions/background.png"

const OurVision = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: 5,
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Centered>
            <Headding color="#ffff" text="Our Vision" />
            <Typography
              sx={{
                marginY: 3,
                textAlign: "center",
                fontSize: { xs: "10px", sm: "15px", md: "17px" },
                color:"#ffff"
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
