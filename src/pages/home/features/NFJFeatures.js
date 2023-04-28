import { Box, Typography } from "@mui/material";
import React from "react";
import Centered from "../../../components/common/Centered";
import traceability from "../../../assets/homePage/features/traceability.png";
import transparency from "../../../assets/homePage/features/transparency.png";
import digiWearable from "../../../assets/homePage/features/digiWearable.png";
import security from "../../../assets/homePage/features/security.png";

const NFJFeatures = () => {
  const features = [
    {
      feature: "Traceability",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: traceability,
    },
    {
      feature: "Transparency",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: transparency,
    },
    {
      feature: "Digitally Wearable",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: digiWearable,
    },
    {
      feature: "Security",
      detail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: security,
    },
  ];

  const Feature = ({ feature, detail, image }) => {
    return (
      <>
        <Box sx={{ width: "50%", marginBottom: "40px", }}>
          <Centered>
            <div>
              {" "}
              <Box
                sx={{
                  width: {
                    xs: "50px",
                    sm: "74px",
                    md: "74px",
                  },
                  height: {
                    xs: "50px",
                    sm: "74px",
                    md: "74px",
                  },
                  borderRadius: "10px",
                  background:
                    "linear-gradient(150.27deg, #f2d196 -79.95%, rgba(240, 209, 44, 0.089117) 59.25%, rgba(240, 167, 44, 0) 140.72%)",
                  padding: "10px",
                }}
              >
                <img src={image} width="100%" />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "28px",
                  },
                  marginY: "10px",
                }}
              >
                {feature}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: {
                    xs: "12px",
                    sm: "17px",
                    md: "17px",
                  },
                  width: {
                    xs: "135px",
                    sm: "255px",
                    md: "255px",
                  },
                  color: "#808080",
                }}
              >
                {detail}
              </Typography>
            </div>
          </Centered>
        </Box>
      </>
    );
  };

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "55%",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        // background:"red"
      }}
    >
      {features.map((feature) => (
        <Feature {...feature} />
      ))}
    </Box>
  );
};

export default NFJFeatures;
