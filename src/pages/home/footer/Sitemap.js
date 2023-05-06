import React from "react";
import Text from "./Text";
import { Box } from "@mui/material";

const Sitemap = () => {
  return (
    <div>
      <Text type1 text="Sitemap" />
      <Text type2 text="Home" />
      <Text type2 text="Abouts" />
      <Text type2 text="Growers" />
      <Text type2 text="Merchants" />
      <Text type2 text="Contact" />
      <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
        <Box marginTop="25px" />
        <Text type2 text="(123)456-7890" />
        <Text type2 text="contact@Nfj.agency" />
      </Box>
    </div>
  );
};

export default Sitemap;
