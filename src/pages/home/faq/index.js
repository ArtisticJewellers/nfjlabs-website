import React from "react";
import AccordionContent from "./AccordionContent";
import { Box, Container, Typography } from "@mui/material";
import Centered from "../../../components/common/Centered";
import backgroundImage from "../../../assets/homePage/Star.png";

const FAQ = () => {
  const dummyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus sem at ullamcorper rhoncus. Sed finibus tellus non mi iaculis, vel aliquet quam elementum. Aenean efficitur, sapien in viverra posuere, magna sapien iaculis augue, vitae fermentum tortor arcu vel velit. Nam lacinia pretium urna vel tempus.";
  const faqs = [
    { question: "What is NFT Jewellery?", answer: dummyText },
    { question: "How are NFTs used in the art world?", answer: dummyText },
    { question: "How is NFT jewelry stored?", answer: dummyText },
    { question: "How do I buy NFT jewelry?", answer: dummyText },
    {
      question: "How does the value of NFT jewelry change?",
      answer: dummyText,
    },
  ];
  const DisplayAnswer = ({ answer }) => {
    return (
      <Typography
        sx={{
          width: "70%",
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
            paddingY:{xs:"50px", sm:"100px", md:"150px"}
          }}
        >
          <Centered>
            <Typography sx={{ fontSize: "40px" }}>FAQs</Typography>
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
