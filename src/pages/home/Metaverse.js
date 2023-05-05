
import React from "react";
import backgroundImage from "../../assets/homePage/metaverseBackground.png";
import { Box, Typography } from "@mui/material";
import Centered from "../../components/common/Centered";

const Metaverse = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        paddingY: { xs: "20px", sm: "25px", md: "30px" },
        marginY: { xs: "30px", sm: "60px", md: "90px" }
      }}
    >
      <Centered>
        <Typography sx={{ fontWeight: 500, fontSize: { xs: "15px", sm: "18px", md: "25px" }, color: "#734b21" }}>
          Check our{" "}
          <a href="https://example.com/metaverse" style={{ color: "#734b21" }}>
            Metaverse
          </a>
        </Typography>
      </Centered>
    </Box>
  );
};

export default Metaverse;
