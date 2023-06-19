import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import OutArrowBtn from "../../../components/common/OutArrowBtn";
import Carousel from "../../../components/common/Carousel.js";
import JoinUsModal from "./JoinUsModal";

const Artist = ({ artistInfo }) => {
  const [openModal, setOpenModal] = useState(false);
  const ArtistInfo = ({ artistName, artistDetail1, artistDetail2 }) => {
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
            {artistName}
          </Typography>
          <Typography
            width="90%"
            sx={{
              fontSize: { xs: "60%", sm: "90%", md: "18px" },
              marginY: "10px",
            }}
          >
            {artistDetail1}
          </Typography>
          <Typography
            width="90%"
            fontSize="18px"
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              marginBottom: "30px",
            }}
          >
            {artistDetail2}
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

  const ArtistContainer = ({ artistInfo }) => {
    const { artistName, img } = artistInfo;
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
          <ArtistInfo {...artistInfo} />
          <img
            alt={artistName}
            width="36%"
            style={{ borderRadius: "10px" }}
            src={img}
          />
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
            marginY: "5px",
          }}
        >
          <Box sx={{ alignSelf: "end" }}>
            <OutArrowBtn
              onClick={() => {
                setOpenModal(true);
              }}
              label="Join Us"
            />
          </Box>
          <Box width="100%">
            <Carousel center>
              {artistInfo.map((info) => (
                <ArtistContainer artistInfo={info} />
              ))}
            </Carousel>
          </Box>
        </Box>
      </Container>
      <JoinUsModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Artist;
