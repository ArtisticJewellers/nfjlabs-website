import { AddRounded, ChevronRight } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";

const AccordionContent = ({ summary, children }) => {
  const SummaryTile = () => {
    return (
      <>
        <Box display="flex" alignItems="center">
          <AddRounded sx={{ marginRight: "10px" }} />

          <Typography
            sx={{
              fontWeight: 400,
              fontFamily: "Montserrat",
              fontSize: { xs: "15px", sm: "20px", md: "24px" },
            }}
          >
            {summary}
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <Accordion
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        "&::before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: 0,
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ChevronRight sx={{ color: "black" }} />}
        sx={{
          backgroundColor: "transparent",
          padding: 0,
          minHeight: 0,
          "&.Mui-expanded": {
            minHeight: 0,
            "& .MuiSvgIcon-root": {
              transform: "rotate(270deg)",
            },
          },
        }}
      >
        <SummaryTile />
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionContent;
