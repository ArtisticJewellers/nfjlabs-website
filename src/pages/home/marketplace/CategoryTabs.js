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
    fontWeight: 400

  };

  const ActiveIcon = () => {
    return <SouthEast sx={{ marginLeft: "5px", fontSize: "30px"}} />;
  };
  const InActiveIcon = () => {
    return <CallMade sx={{ marginLeft: "5px", fontSize: "30px" }} />;
  };

  return (
    <Container sx={{ marginY: "10px" }}>
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab
          label="Category1"
          icon={0 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={tabStyle}
        />
        <Tab
          label="Category2"
          icon={1 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={tabStyle}
        />
        <Tab
          label="Category3"
          icon={2 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={tabStyle}
        />
        <Tab
          label="Category4"
          icon={3 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={tabStyle}
        />
      </Tabs>
    </Container>
  );
};

export default CategoryTabs;
