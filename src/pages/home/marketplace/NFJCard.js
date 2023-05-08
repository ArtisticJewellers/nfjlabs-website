import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import dolce from "../../../assets/homePage/trending/dolce.gif";

const NFJCard = ({ name, gif, type, value }) => {
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    } else {
      return str;
    }
  }
  return (
    <Box
      sx={{
        border: {xs:"2px solid #F4E1B6", sm:"4px solid #F4E1B6", md:"4px solid #F4E1B6"},
        borderRadius: "12px",
        width: { xs: "45%", sm: "200px", md: "272px" },
        height: { xs: "100%", sm: "280px", md: "357px" },
        overflow: "hidden",
        margin: "5px",
      }}
    >
      <Box sx={{ width: { xs: "95%", sm: "200px", md: "272px" } }}>
        <img width="100%" src={gif} alt="NFT" />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "11px", md: "17px" },
            fontWeight: 500,
          }}
        >
          {truncateString(name, 13)}
        </Typography>
        <Box
          sx={{
            background: "#F0A72C",
            paddingY: "2px",
            paddingX: "4px",
            borderRadius: "2px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <Typography
            color="secondary"
            sx={{ fontSize: { xs: "5px", sm: "10px", md: "12px" } }}
          >
            #trending
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          mb:{ xs: 2, sm: 0, md: 0 }
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "11px", md: "15px" },
            fontWeight: 300,
          }}
        >
          {`Type: ${type}`}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "15px" },
            fontWeight: 500,
          }}
        >
          {`$ ${value}`}
        </Typography>
      </Box>
      {/* 
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2 }}
      >
        <Grid item>
          <Typography sx={{ fontSize: "15px", fontWeight: 300 }}>
            {`Type: ${type}`}
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            {`$ ${value}`}
          </Typography>
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default NFJCard;
