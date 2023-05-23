import React from "react";
import Centered from "../../../components/common/Centered";
import { Box, Container, Typography } from "@mui/material";
import Headding from "../../../components/common/Headding";

import news18 from "../../../assets/about/news/News18.png";
import economic from "../../../assets/about/news/the_economic_times.png";
import republic from "../../../assets/about/news/republic_world.png";
import dainik from "../../../assets/about/news/dainik_bhaskar.png";
import backgroundImage from "../../../assets/homePage/partners/background.png";

import Row from "../../../components/common/Row";

const News = () => {
  const partners = [news18, economic, republic, dainik];
  const PartnersList = () => {
    return (
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container sx={{ my: { xs: 2, sm: 5, md: 5 } }}>
          <Centered>
            <Headding color="#1757AA">In the news</Headding>
          </Centered>
          <Row>
            {partners.map((partner) => (
              <Box
                sx={{
                  mx: { xs: 2, sm: 5, md: 5 },
                  width: { xs: "100px", sm: "150px", md: "200px" },
                }}
              >
                <img width="100%" src={partner} />
              </Box>
            ))}
          </Row>
        </Container>
      </Box>
    );
  };

  return (
    <>
      <Centered>
        <PartnersList />
      </Centered>
    </>
  );
};

export default News;
