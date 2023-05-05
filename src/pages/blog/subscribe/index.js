import { Box, Container, Typography, TextField, Button } from "@mui/material";
import React from "react";
import backgroundImage from "../../../assets/blog/subscribe/background.png";
import Centered from "../../../components/common/Centered";
import Row from "../../../components/common/Row";
import Spacer from "../../../components/common/Spacer";

const Subscribe = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingY: { xs: 5, sm: 8, md: 10 },
        }}
      >
        <Container>
          <Centered>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "20px", md: "35px" },
                fontWeight: 700,
              }}
              color="secondary"
            >
              Subscribe to get latest news & updates!
            </Typography>
            <Spacer size={25} />
            <Row sx={{ width: "100%", justifyContent: "center" }}>
              <TextField
                placeholder="Enter your email"
                // variant="outlined"
                size="small"
                sx={{ bgcolor: "white", width: "60%" }}
                inputProps={{
                  sx: {
                    height: { xs: "10px", sm: "15px", md: "20px" },
                    fontSize: { xs: "10px", sm: "15px", md: "20px" },
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  height: { xs: "28px", sm: "32px", md: "39px" },
                  background: "#773DA5",
                }}
              >
                Submit
              </Button>
            </Row>
          </Centered>
        </Container>
      </Box>
    </>
  );
};

export default Subscribe;
