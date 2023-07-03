import { CallMade, SouthEast } from "@mui/icons-material";
import { Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const TeamTabs = ({ onChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log("the new value is --------->", newValue);
    setValue(newValue);
    onChange(newValue);
  };

  const tabStyle = {
    fontSize: { xs: "10px", sm: "15px", md: "28px" },
    flexDirection: "row-reverse",
    textTransform: "none",
    fontWeight: 400,
    transition: "all 0.2s ease-in-out",
    // background: "red",
    paddingX: "0px",
    "& .MuiTab-wrapper": {
      margin: "0px", // Adjust the margin here
      background: "red",
    },
  };

  const inactiveTabStyle = {
    fontSize: { xs: "8px", sm: "12px", md: "20px" },
    color: "#a3a19e",
    flexDirection: "row-reverse",
    textTransform: "none",
    fontWeight: 400,
    transition: "all 0.2s ease-in-out",
    paddingX: "0px",
    "& .MuiTab-wrapper": {
      margin: "0px", // Adjust the margin here
    },
  };

  const ActiveIcon = () => {
    return (
      <SouthEast
        sx={{
          marginLeft: "5px",
          fontSize: { xs: "8px", sm: "15px", md: "30px" },
        }}
      />
    );
  };
  const InActiveIcon = () => {
    return (
      <CallMade
        sx={{
          marginLeft: "5px",
          fontSize: { xs: "8px", sm: "15px", md: "28px" },
        }}
      />
    );
  };

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        variant="fullWidth"
        sx={{ height: { xs: "50px", sm: "", md: "" }, padding: "0px" }}
      >
        <Tab
          label="Founding team"
          icon={0 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={0 === value ? tabStyle : inactiveTabStyle}
        />
        <Tab
          label="NFJ Partners"
          icon={1 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={1 === value ? tabStyle : inactiveTabStyle}
        />
        <Tab
          label="Advisors"
          icon={2 === value ? <ActiveIcon /> : <InActiveIcon />}
          sx={2 === value ? tabStyle : inactiveTabStyle}
        />
      </Tabs>
    </Container>
  );
};

export default TeamTabs;
