import React from "react";
import Title from "./Title";
import CategoryTabs from "./CategoryTabs";
import Category1 from "./Category1";
import { Box } from "@mui/material";

const Marketplace = () => {
  return (
    <>
      <Title />
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <CategoryTabs />
      </Box>
      <Category1 />
    </>
  );
};

export default Marketplace;
