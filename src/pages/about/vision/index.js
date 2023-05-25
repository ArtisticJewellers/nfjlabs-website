import { Box, Container, Typography } from "@mui/material";
import React from "react";
import backgroundImage from "../../../assets/homePage/collaborations/webBackground.png";
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
              Lorem ipsum dolor sit amet consectetur. Nam placerat imperdiet non
              nibh sed at elementum sed. Placerat semper pretium quis sed at.
              Elementum quam amet odio nisl quis sagittis. Consequat amet
              fringilla facilisis facilisis rhoncus vitae arcu.
            </Typography>
          </Centered>
          <Visions />
        </Container>
      </Box>
    </>
  );
};

export default OurVision;
