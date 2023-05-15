import React from "react";
import Text from "./Text";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navigate from "../../../components/common/Navigate";

const Sitemap = () => {
  return (
    <div>
      <Text type1 text="Sitemap" />
      <Navigate to="/">
        <Text type2 text="Home" />
      </Navigate>
      <Navigate to="/about">
        <Text type2 text="About us" />
      </Navigate>

      <Navigate to="/blog">
        <Text type2 text="Blogs" />
      </Navigate>

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
