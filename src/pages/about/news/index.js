import React from "react";
import Centered from "../../../components/common/Centered";
import { Box, Container, Typography } from "@mui/material";
import Headding from "../../../components/common/Headding";

import news18 from "../../../assets/about/news/News18.webp";
import economic from "../../../assets/about/news/the_economic_times.webp";
import republic from "../../../assets/about/news/republic_world.webp";
import dainik from "../../../assets/about/news/dainik_bhaskar.webp";
import backgroundImage from "../../../assets/homePage/partners/background.webp";

import Row from "../../../components/common/Row";

const News = () => {
  const news = [news18, economic, republic, dainik];
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
            <Headding size="s1" color="#1757AA">
              In the news
            </Headding>
          </Centered>
          <Row>
            {news.map((n, index) => (
              <Box
                sx={{
                  mx: { xs: 1, sm: 5, md: 5 },
                  width: { xs: "200px", sm: "150px", md: "200px" },
                }}
              >
                <img width="100%" src={n} alt={`news-${index}`} />
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
