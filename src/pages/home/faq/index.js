import React, { useState } from "react";
import AccordionContent from "./AccordionContent";
import { Box, Container, Typography } from "@mui/material";
import Centered from "../../../components/common/Centered";
import backgroundImage from "../../../assets/homePage/Star.png";
import RadioButtons from "../../../components/common/RadioButtons";
import faqs from "./faqData";

const FAQ = () => {
  const [faqType, setFaqType] = useState(0);

  const onQuestionTypeChange = (type) => {
    setFaqType(type);
  };
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

  const AboutNfj = () => {
    return (
      <>
        {faqs.aboutNfj.map((faq) => (
          <Box marginY={1}>
            <AccordionContent summary={faq.question}>
              <DisplayAnswer answer={faq.answer} />
            </AccordionContent>
          </Box>
        ))}
      </>
    );
  };

  const Benefits = () => {
    return (
      <>
        {faqs.benefits.map((faq) => (
          <Box marginY={1}>
            <AccordionContent summary={faq.question}>
              <DisplayAnswer answer={faq.answer} />
            </AccordionContent>
          </Box>
        ))}
      </>
    );
  };

  const Investment = () => {
    return (
      <>
        {faqs.investment.map((faq) => (
          <Box marginY={1}>
            <AccordionContent summary={faq.question}>
              <DisplayAnswer answer={faq.answer} />
            </AccordionContent>
          </Box>
        ))}
      </>
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
          <RadioButtons
            buttons={["About NFJ", "Benefits", "Investment"]}
            onChange={onQuestionTypeChange}
            initialActiveBtn={1}
          />
          {faqType === 0 ? (
            <AboutNfj />
          ) : faqType === 1 ? (
            <Benefits />
          ) : (
            <Investment />
          )}
        </Box>
      </Container>
    </>
  );
};

export default FAQ;
