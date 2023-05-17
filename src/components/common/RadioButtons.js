import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";

const RadioButtons = ({ buttons, initialActiveBtn, onChange }) => {
  const [activeBtn, setActiveBtn] = useState(
    initialActiveBtn ? initialActiveBtn - 1 : buttons.length
  );
  
  return (
    <>
      {buttons.map((btn, index) => (
        <Button
          key={index}
          variant="contained"
          onClick={() => {
            console.log("the clicked btn is----->", index);
            setActiveBtn(index);
            onChange(index);
          }}
          sx={{
            background: activeBtn === index ? "#F0A72C" : "#ffff",
            border: "1px solid #F0A72C",
            color: activeBtn === index ? "#ffff" : "black",
            marginRight:2,
            fontSize: { xs: "10px", sm: "15px", md: "19px" },
            "&:hover": {
              color: "#fff",
            },
          }}
        >
          {btn}
        </Button>
      ))}
    </>
  );
};

export default RadioButtons;