import { Box, Typography, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";
import Centered from "../../../components/common/Centered";
import traceability from "../../../assets/homePage/features/traceability.png";
import transparency from "../../../assets/homePage/features/transparency.png";
import digiWearable from "../../../assets/homePage/features/digiWearable.png";
import security from "../../../assets/homePage/features/security.png";
import truncateString from "../../../helpers/truncateString";

const NFJFeatures = () => {
  const features = [
    {
      feature: "Traceability",
      detail:
        "NFJ Labs makes the traceability seamless for you. By minting an NFT for each piece of jewellery, owners can establish an unbreakable chain of ownership. Through the power of blockchain technology, every transaction and change of hands is permanently recorded, creating an indisputable record of authenticity",
      image: traceability,
    },
    {
      feature: "Transparency",
      detail:
        "NFTs offer a unique opportunity to shine a light on the ethical and sustainable practices behind jewellery creation. By embedding details about materials used and production methods into the NFT, consumers can make informed choices that align with their values. Transparency becomes a guiding force, empowering buyers to support responsible craftsmanship.",
      image: transparency,
    },
    {
      feature: "Digitally Wearable",
      detail:
        "Embrace the digital realm where jewellery becomes virtually wearable. With NFTs, potential buyers can immerse themselves in a captivating virtual environment, trying on exquisite pieces before making a purchase. This immersive experience allows individuals to visualize the jewellery's allure, making confident and personalized decisions.",
      image: digiWearable,
    },
    {
      feature: "Security",
      detail:
        "In the realm of NFTs, security takes center stage. Owners gain unprecedented control over their jewellery through encrypted access to the associated digital assets. With ironclad protection, unauthorised access is thwarted, allowing owners to assert complete authority over their NFT and its digital representation.",
      image: security,
    },
  ];

  const Feature = ({ feature, detail, image }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <>
        <Box sx={{ height:"400px", width: "50%", marginBottom: "40px" }}>
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
                    md: "14px",
                    lg: "16px",
                  },
                  width: {
                    xs: "135px",
                    sm: "240px",
                    md: "220px",
                    lg: "300px",
                  },
                  color: "#808080",
                }}
              >
                {expanded ? detail : truncateString(detail, 200)}
              </Typography>
              {detail.length > 200 && (
                <IconButton
                  onClick={handleExpandClick}
                  sx={{
                    marginLeft: "5px",
                    color: "#808080",
                    padding: "0",
                  }}
                >
                  {expanded ? "Read less" : "Read more"}
                </IconButton>
              )}
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
        // alignItems: "center",
        // justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {features.map((feature) => (
        <Feature {...feature} key={feature.feature} />
      ))}
    </Box>
  );
};

export default NFJFeatures;
