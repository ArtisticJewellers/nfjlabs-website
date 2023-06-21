import { Box, Container, Typography } from "@mui/material";
import React from "react";
import backgroundImage from "../../../assets/homePage/artists/artistTexture.webp";
import Centered from "../../../components/common/Centered";
import diamondAnim from "../../../assets/homePage/stats/https___lottiefiles.com_138688-0101j-ac-01.gif";

const Stats = () => {
  const DisplayInfo = ({ type, value }) => {
    return (
      <>
        <div>
          <Centered>
            <Typography
              fontWeight="700"
              color="primary"
              sx={{
                mb: 0,
                fontSize: { xs: "30px", sm: "45px", md: "40px", lg: "50px" },
              }}
            >
              {value}
            </Typography>
            <Typography
              fontWeight="400"
              fontSize="25px"
              color="secondary"
              sx={{
                mt: 0,
                fontSize: { xs: "15px", sm: "22px", md: "20px", lg: "25px" },
              }}
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
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "50%" },
            // background: "red",
            display:{xs:"block", md:"flex"}
          }}
        >
          <Box sx={{flexGrow:1, display:{xs:"none", md:"block"}}} />
          <Centered>
          <img src={diamondAnim} width="150px" />
          <Typography
            fontWeight="500"
            color="#FFC84A"
            sx={{
              textAlign: { xs: "center", sm: "center", md: "right" },
              fontSize: { xs: "15px", sm: "30px", md: "20px", lg: "30px" },
              // width: { xs: "100%", sm: "100%", md: "50%" },

              // marginTop: { xs: "30px" },
            }}
          >
            Reasons to Count on Us
          </Typography>
          </Centered>
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;
