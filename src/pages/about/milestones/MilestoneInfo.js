import { Box, Typography } from "@mui/material";
import React from "react";

const MilestoneInfo = ({ title, list }) => {
  return (
    <>
      <Box
        sx={{
          marginTop: 2,
          height: { xs: "100px", sm: "150px", md: "200px", lg: "200px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { xs: "10px", sm: "15px", md: "20px", lg: "25px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: { xs: "10px", sm: "15px", md: "20px", lg: "25px" },
          }}
        >
          <ul>
            {list.map((li) => (
              <li>{li}</li>
            ))}
          </ul>
        </Typography>
      </Box>
    </>
  );
};

export default MilestoneInfo;
