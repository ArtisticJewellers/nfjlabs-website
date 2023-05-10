import { Box, Grid } from "@mui/material";
import React from "react";
import ribbon from "../../../assets/homePage/trending/ribbon.png";

import dolce from "../../../assets/homePage/trending/dolce.gif";
import goldenstan from "../../../assets/homePage/trending/Goldenstan.gif";
import qajar from "../../../assets/homePage/trending/qajar.gif";
import lion from "../../../assets/homePage/trending/lion.gif";


const DisplayGif = ({ web, src }) => {
  return (
    <>
      <img
        style={{ borderRadius: "10px", background:"#ffff" }}
        width={web ? "100px" : "80px"}
        src={src}
      />
    </>
  );
};

const Web = () => {
  return (
    <>
      <div>
        <img width="120px" src={ribbon} />
        <Box sx={{ width: "220px", marginTop: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <DisplayGif web src={dolce} />
            </Grid>
            <Grid item xs={6}>
              <DisplayGif web src={goldenstan} />
            </Grid>
            <Grid item xs={6}>
              <DisplayGif web src={qajar} />
            </Grid>
            <Grid item xs={6}>
              <DisplayGif web src={lion} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

const Mobile = () => {
  return (
    <>
      <div>
        <img width="100px" src={ribbon} />
        <Box sx={{ width: "100%", marginTop: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <DisplayGif src={dolce} />
            </Grid>
            <Grid item xs={3}>
              <DisplayGif src={goldenstan} />
            </Grid>
            <Grid item xs={3}>
              <DisplayGif src={qajar} />
            </Grid>
            <Grid item xs={3}>
              <DisplayGif src={lion} />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

const Trending = ({ web }) => {
  return web ? <Web /> : <Mobile />;
};

export default Trending;
