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
        "When an NFT is created for a piece of jewellry, it is recorded on a blockchain This creates a permanent and unchangeable record of the jewellry's ownership history and transaction history.",
      image: traceability,
    },
    {
      feature: "Transparency",
      detail:
        "NFTs can also be used to provide transparency around the ethical and sustainable practices used in the creation of the jewellery. By recording the materials used and production methods ",
      image: transparency,
    },
    {
      feature: "Digitally Wearable",
      detail:
        "Allows buyers to try on the jewellery in a virtual environment before making a purchase. This can help them to visualise how the jewellery will look and feel, and make a more informed purchasing decision ",
      image: digiWearable,
    },
    {
      feature: "Security",
      detail:
        "Owner of the jewellery to control access to the NFT and the associated digital assets. This can prevent unauthorised access and ensure that the owner has full control over the NFT and the associated digital assets",
      image: security,
    },
  ];

  const Feature = ({ feature, detail, image }) => {
    return (
      <>
        <Box sx={{ width: "50%", marginBottom: "40px" }}>
          <Centered>
            <div>
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
                <img alt={feature} src={image} width="100%" />
              </Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: {
                    xs: "17px",
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
                    xs: "10px",
                    sm: "12px",
                    md: "15px",
                  },
                  width: {
                    xs: "135px",
                    sm: "240px",
                    md: "240px",
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
