import React from "react";
// import Numbers from "./Numbers";
import Artist from "./Artist";
import { Container } from "@mui/material";
import Centered from "../../../components/common/Centered";
import Heading from "../../../components/common/Headding";
import alessio from "../../../assets/homePage/artists/artist.webp";
import ali from "../../../assets/homePage/artists/Ali Shah.png";

const Artists = () => {
  const artistInfo = [
    {
      artistName: "ALESSIO BOSCHI",
      artistDetail1:
        "Living in the world of our wildest imagination, fueled by an unrelenting desire to create the seemingly impossible, Alessio Boschi has been delighting the jewelry world with his exquisite and whimsical creations for over 20 years.",
      artistDetail2:
        "A fiercely proud Roman, he divides his time between his home in the medieval village of Bagnoregio, Italy and Bangkok, Thailand, where his unique collections are meticulously hand made by local and international master jewelers.",
      img: alessio,
    },
    {
      artistName: "ALI SHAH",
      artistDetail1:
        "Living in the world of our wildest imagination, fueled by an unrelenting desire to create the seemingly impossible, Alessio Boschi has been delighting the jewelry world with his exquisite and whimsical creations for over 20 years.",
      artistDetail2:
        "A fiercely proud Roman, he divides his time between his home in the medieval village of Bagnoregio, Italy and Bangkok, Thailand, where his unique collections are meticulously hand made by local and international master jewelers.",
      img: ali,
    },
  ];
  return (
    <>
      {/* <Numbers /> */}
      <Container>
        <Centered>
          <Heading text="Meet Our Artists" />
        </Centered>
      </Container>
      <Artist artistInfo={artistInfo} />
    </>
  );
};

export default Artists;
