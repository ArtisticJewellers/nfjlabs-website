import React, { useState } from "react";
import Title from "./Title";
import CategoryTabs from "./CategoryTabs";
import Category1 from "./Category1";
import { Box } from "@mui/material";
import Jewellery from "./Products/Jewellery";
import Gems from "./Products/Gems";
import Coins from "./Products/Coins";

const Marketplace = () => {
  const [category, setCategory] = useState(0);
  return (
    <>
      <Title />
      <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
        <CategoryTabs
          onChange={(category) => {
            setCategory(category);
          }}
        />
      </Box>
      {category === 0 ? <Jewellery /> : category === 1 ? <Gems /> : <Coins />}
    </>
  );
};

export default Marketplace;
