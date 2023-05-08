import React from "react";
import AccordionContent from "./AccordionContent";
import { Box, Container, Typography } from "@mui/material";
import Centered from "../../../components/common/Centered";
import backgroundImage from "../../../assets/homePage/Star.png";
import { faqs } from "../Constants";

const FAQ = () => {
  const DisplayAnswer = ({ answer }) => {
    return (
      <Typography
        sx={{
          // width: "90%",
          color: "#808080",
          marginY: "10px",
          fontSize: { xs: "12px", sm: "15px", md: "20px" },
        }}
      >
        {answer}
      </Typography>
    );
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "25%",
            paddingY: { xs: "10px", sm: "100px", md: "150px" },
            marginTop: 3,
          }}
        >
          <Centered>
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "35px", md: "40px" },
                marginY: 3,
              }}
            >
              FAQs
            </Typography>
          </Centered>
          {faqs.map((faq) => (
            <AccordionContent summary={faq.question}>
              <DisplayAnswer answer={faq.answer} />
            </AccordionContent>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default FAQ;
