import React from "react";

import i1 from "../../../assets/homePage/gallery/NFJ Image 1.webp";
import i2 from "../../../assets/homePage/gallery/NFJ Image 2.webp";
import i3 from "../../../assets/homePage/gallery/NFJ Image 3.webp";
import i4 from "../../../assets/homePage/gallery/NFJ Image 4.webp";
import i5 from "../../../assets/homePage/gallery/NFJ IMage 5.webp";
import i6 from "../../../assets/homePage/gallery/NFJ IMage 6.webp";
import i7 from "../../../assets/homePage/gallery/NFJ Image 7.webp";
import i8 from "../../../assets/homePage/gallery/NFJ Image 8.webp";
import i9 from "../../../assets/homePage/gallery/NFJ IMage 9.webp";
import i10 from "../../../assets/homePage/gallery/NFJ Image 10.webp";
import { Container, Typography } from "@mui/material";
import GridImage from "./GridImage";
import Centered from "../../../components/common/Centered";
import Headding from "../../../components/common/Headding";
import Spacer from "../../../components/common/Spacer";

const Gallery = () => {
  const galleryItems = [
    { img: i1, title: "artist" },
    { img: i2, title: "artist" },
    { img: i3, title: "artist" },
    { img: i4, title: "artist" },
    { img: i5, title: "artist" },
    { img: i6, title: "artist" },
    { img: i7, title: "artist" },
    { img: i8, title: "artist" },
    { img: i9, title: "artist" },
    { img: i10, title: "artist" },
    { img: i1, title: "artist" },
    // { img: i11, title: "artist" },
  ];
  return (
    <>
      <Spacer size={50} />
      <Container>
        <Centered>
          <Headding text="Gallery" />
        </Centered>

        <GridImage galleryItems={galleryItems} />
      </Container>
    </>
  );
};

export default Gallery;
