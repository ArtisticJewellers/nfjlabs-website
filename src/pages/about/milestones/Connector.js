import { Box } from "@mui/material";
import React from "react";

const Connector = ({ color }) => {
  return (
    <Box
      sx={{
        width: { xs: "15px", sm: "25px", md: "50px" },
        height: { xs: "15px", sm: "25px", md: "50px" },
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 45 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45 0C24.6774 13.0667 6.53226 5.44444 0 0C8.12903 14.6347 3.3871 38.7644 0 49C19.1613 35.4107 37.9839 43.3378 45 49C37.4516 31.752 41.8548 9.14667 45 0Z"
          fill={color}
        />
      </svg>
    </Box>
  );
};

export default Connector;
