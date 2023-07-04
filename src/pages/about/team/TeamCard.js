import { Box, Chip, Container, Typography } from "@mui/material";
import React from "react";
import Centered from "../../../components/common/Centered";
import Navigate from "../../../components/common/Navigate";

const TeamCard = ({ name, designation, img, index }) => {
  return (
    <Navigate to={`/member-detail/${index + 1}`}>
      <Box
        sx={{
          width: { xs: "150px", sm: "200px", md: "250px", lg: "350px" },
          boxShadow: "20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff",
          background: "#ffffff",
          padding: { xs: 1, sm: 2, md: 2, lg: 3 },
          borderRadius: { xs: "10px", sm: "20px", md: "30px" },
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        <Centered>
          <Box
            sx={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: { xs: "10px", sm: "20px", md: "30px" },
              width: "100%",
              height: { xs: "150px", sm: "200px", md: "300px", lg: "400px" },
              position: "relative", // Added position relative
            }}
          >
            <Chip
              sx={{
                position: "absolute",
                bottom: { xs: "-12px", sm: "-16px", md: "-16px" },
                left: "50%",
                transform: "translateX(-50%)",
                border: "2px solid white",
                color: "white",
                fontWeight: 500,
                fontSize: { xs: "8px", sm: "13px", md: "18px" },
                height: { xs: "25px", sm: "30px", md: "35px" },
              }}
              label="NFJ Labs"
              color="primary"
            />
          </Box>

          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "10px", sm: "15px", md: "22px", lg: "25px" },
              marginTop: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: { xs: "8px", sm: "12px", md: "18px", lg: "20px" },
              color: "#a3a19e",
            }}
          >
            {designation}
          </Typography>
        </Centered>
      </Box>
    </Navigate>
  );
};

export default TeamCard;
