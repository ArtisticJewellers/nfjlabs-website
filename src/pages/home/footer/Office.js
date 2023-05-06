import React from "react";
import Text from "./Text";
import { Box, TextField } from "@mui/material";
import EmailOutlined from "@mui/icons-material/EmailOutlined";

const Office = () => {
  return (
    <Box>
      <Text type1 text="Head Office" />
      <Text
        type2
        text="Xilliams Corner Wine © 2017. 1112 A Market St # Ste B22, Charlottesville, CA 45565"
      />
      <Box marginTop="25px" />
      <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
        <Text type5 text="NEWS LETTER" />
        <TextField
          variant="standard"
          placeholder="Enter your email address"
          InputProps={{
            endAdornment: (
              <EmailOutlined
                sx={{
                  color: "#3D3D3D",
                  fontSize: { xs: "15px", sm: "15px", md: "20px" },
                }}
              />
            ),
            sx: { fontSize: { xs: "5px", sm: "10px", md: "10px" } },
          }}
          sx={{
            width: { xs: "100px", sm: "200px", md: "200px" },
          }}
        />
      </Box>
        <Box marginTop="100px" />
      <Text type4 text="© 2023 NFJ Media. All rights reserved. " />
    </Box>
  );
};

export default Office;
