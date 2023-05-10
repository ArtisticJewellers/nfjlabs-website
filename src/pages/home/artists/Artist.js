import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import OutArrowBtn from "../../../components/common/OutArrowBtn";
import artist from "../../../assets/homePage/artists/artist.png";
import Carousel from "../../../components/common/Carousel.js";

const Artist = () => {
  const ArtistInfo = () => {
    return (
      <>
        <Box
          sx={{
            height: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "15px", sm: "30px", md: "30px" } }}
            fontWeight="500"
            color="#D0880D"
          >
            ALESSIO BOSCHI
          </Typography>
          <Typography
            width="90%"
            sx={{
              fontSize: { xs: "60%", sm: "90%", md: "18px" },
              marginY: "10px",
            }}
          >
            Living in the world of our wildest imagination, fueled by an
            unrelenting desire to create the seemingly impossible, Alessio
            Boschi has been delighting the jewelry world with his exquisite and
            whimsical creations for over 20 years.
          </Typography>
          <Typography
            width="90%"
            fontSize="18px"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              marginBottom: "30px",
            }}
          >
            A fiercely proud Roman, he divides his time between his home in the
            medieval village of Bagnoregio, Italy and Bangkok, Thailand, where
            his unique collections are meticulously hand made by local and
            international master jewelers.
          </Typography>
          <Button
            sx={{
              borderRadius: "5px",
              color: "#ffff",
              // width: "20%",
              fontSize: { xs: "10px", sm: "15px", md: "20px" },
            }}
            variant="contained"
          >
            Know More
          </Button>
        </Box>
      </>
    );
  };

  const ArtistContainer = () => {
    return (
      <>
      
        <Box
          sx={{
            marginY: "35px",
            width: "99%",
            padding: { xs: "35px", sm: "35px", md: "50px" },
            background:
              "linear-gradient(to bottom right, #f7e8cd 8.3%, rgba(255, 218, 164, 0) 89.02%)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ArtistInfo />
          <img width="36%" style={{ borderRadius: "10px" }} src={artist} />
        </Box>
      </>
    );
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginY: "55px",
          }}
        >
          <Box sx={{ alignSelf: "end" }}>
            <OutArrowBtn label="Join Us" />
          </Box>
          <Box width="100%">
            <Carousel center>
              <ArtistContainer />
              <ArtistContainer />
            </Carousel>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Artist;
