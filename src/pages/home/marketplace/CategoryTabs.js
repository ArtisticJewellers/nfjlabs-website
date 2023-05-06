import { CallMade, SouthEast } from "@mui/icons-material";
import { Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const CategoryTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyle = {
    fontSize: "28px",
    flexDirection: "row-reverse",
    textTransform: "none",
    fontWeight: 400,
    transition: "all 0.2s ease-in-out"
  };

  const inactiveTabStyle = {
    fontSize: "20px",
    color: "#a3a19e",
    flexDirection: "row-reverse",
    textTransform: "none",
    fontWeight: 400,
    transition: "all 0.2s ease-in-out"
  };

  const ActiveIcon = () => {
    return <SouthEast sx={{ marginLeft: "5px", fontSize: "30px"}} />;
  };
  const InActiveIcon = () => {
    return <CallMade sx={{ marginLeft: "5px", fontSize: "25px" }} />;
  };

  return (
    <Container sx={{ marginY: "10px" }}>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab
          label="Category1"
          icon={0 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={0 === value ? tabStyle : inactiveTabStyle}
        />
        <Tab
          label="Category2"
          icon={1 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={1 === value ? tabStyle : inactiveTabStyle}
        />
        <Tab
          label="Category3"
          icon={2 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={2 === value ? tabStyle : inactiveTabStyle}
        />
        <Tab
          label="Category4"
          icon={3 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={3 === value ? tabStyle : inactiveTabStyle}
        />
      </Tabs>
    </Container>
  );
};

export default CategoryTabs;
