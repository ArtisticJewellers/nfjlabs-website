import React from "react";
import Text from "./Text";
import { Box } from "@mui/material";

const Socials = () => {
  const redirect = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div>
      <Text type1 text="Socials" />
      <Text
        type2
        text="Linkedin"
        onClick={() => {
          redirect("https://www.linkedin.com/company/nfj-labs/");
        }}
      />
      <Text
        type2
        text="Instagram"
        onClick={() => {
          redirect("https://www.instagram.com/nfjlabs/");
        }}
      />
      <Text
        type2
        text="Twitter"
        onClick={() => {
          "https://twitter.com/nfjlabs";
        }}
      />
    </div>
  );
};

export default Socials;
