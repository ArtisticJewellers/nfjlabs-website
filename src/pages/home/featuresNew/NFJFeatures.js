import { Box, Typography, Collapse, IconButton, Button } from "@mui/material";
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
        <Box
          sx={{
            // height: { xs: "350px", sm: "300px", md: "400px" },
            width: "255px",
            minHeight:{xs:"", md:"255px", lg:"320px"},
            
            padding: 1,
            marginBottom: "40px",
            borderRadius: "3px",
            boxShadow:
              "3.64019px 3.64019px 29.1215px rgba(173, 173, 173, 0.25)",
          }}
        >
          <Centered>
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
                  md: "20px",
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
                color: "#808080",
              }}
            >
              {expanded ? detail : truncateString(detail, 155)}
              {detail.length > 155 && (
                <span
                  onClick={handleExpandClick}
                  style={{
                    color: "#FFC84A",
                    cursor: "pointer",
                  }}
                >
                  {expanded ? "Read less" : "Read more"}
                </span>
              )}
            </Typography>
          </Centered>
        </Box>
      </>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "start",
        justifyContent: "space-around",
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
