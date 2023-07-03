import { Box, Container, IconButton, Typography } from "@mui/material";
import { Email, Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import Row from "../../components/common/Row";
import Heading from "../../components/common/Headding";

import naman from "../../assets/about/team/naman.webp"

const Introduction = () => {
  const iconStyle = {
    fontSize: "50px",
    color: "#ffc33b",
  };

  const renderIcons = () => {
    const icons = [
      { icon: Facebook, label: "Facebook" },
      { icon: Twitter, label: "Twitter" },
      { icon: Email, label: "Email" },
      { icon: LinkedIn, label: "LinkedIn" },
    ];

    return icons.map((item, index) => {
      const IconComponent = item.icon;
      return (
        <IconButton key={index} aria-label={item.label}>
          <IconComponent sx={iconStyle} />
        </IconButton>
      );
    });
  };

  return (
    <Container sx={{marginY:10}}> 
      <Row>
        <Box sx={{ width: "50%" }}>
          <Box marginLeft={2}>
            <Heading>Naman Sidharth</Heading>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ultrices, velit sit amet consequat aliquet, justo urna vestibulum
              lectus, at iaculis nunc nulla ut purus. Sed tempus libero id leo
              posuere fermentum...
            </Typography>
          </Box>

          <Row sx={{ justifyContent: "start" }}>{renderIcons()}</Row>
        </Box>

        <img src={naman} width="350px" style={{borderRadius:"20px"}} />
      </Row>
    </Container>
  );
};

export default Introduction;
