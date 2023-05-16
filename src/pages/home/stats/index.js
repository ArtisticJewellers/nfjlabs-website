import { Box, Container, Typography } from "@mui/material";
import React from "react";
import backgroundImage from "../../../assets/homePage/artists/artistTexture.png";
import Centered from "../../../components/common/Centered";

const Stats = () => {
  const DisplayInfo = ({ type, value }) => {
    return (
      <>
        <div>
          <Centered>
            <Typography
              fontWeight="700"
              color="primary"
              sx={{ mb: 0, fontSize: { xs: "30px", sm: "45px", md: "50px" } }}
            >
              {value}
            </Typography>
            <Typography
              fontWeight="400"
              fontSize="25px"
              color="secondary"
              sx={{ mt: 0, fontSize: { xs: "15px", sm: "22px", md: "25px" } }}
            >
              {type}
            </Typography>
          </Centered>
        </div>
      </>
    );
  };

  const nfjStatus = [
    { type: "Total Assets", value: "100+" },
    { type: "Transactions", value: "1,000+" },
    { type: "Artists", value: "5+" },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingY: { xs: "35px", sm: "40px", md: "70px" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: { xs: "100%", sm: "100%", md: "50%" },
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {nfjStatus.map((stat) => (
            <DisplayInfo type={stat.type} value={stat.value} />
          ))}
        </Box>
        <Typography
          fontWeight="500"
          color="#B5B5B5"
          sx={{
            textAlign: { xs: "center", sm: "center", md: "right" },
            fontSize: { xs: "25px", sm: "40px", md: "50px" },
            width: { xs: "100%", sm: "100%", md: "50%" },
            marginTop: { xs: "30px" },
          }}
        >
          Meet Our Artists
        </Typography>
      </Container>
    </Box>
  );
};

export default Stats;
