import { Box, Container, IconButton, Typography } from "@mui/material";
import { Email, Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import Row from "../../components/common/Row";
import Heading from "../../components/common/Headding";

import naman from "../../assets/about/team/naman/naman.webp";

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
    <Container sx={{ marginY: 10 }}>
      <Row>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box marginLeft={2}>
            <Heading>Naman Sidharth</Heading>
            <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
              <img src={naman} width="200px" style={{ borderRadius: "10px" }} />
            </Box>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ultrices, velit sit amet consequat aliquet, justo urna vestibulum
              lectus, at iaculis nunc nulla ut purus. Sed tempus libero id leo
              posuere fermentum...
            </Typography>
          </Box>

          <Row sx={{ justifyContent: "start" }}>{renderIcons()}</Row>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <img src={naman} width="350px" style={{ borderRadius: "20px" }} />
        </Box>
      </Row>
    </Container>
  );
};

export default Introduction;
