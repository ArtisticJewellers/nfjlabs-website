import { Box, Container, IconButton, Typography } from "@mui/material";
import Row from "../../components/common/Row";
import Heading from "../../components/common/Headding";

// ICON IMAGES
import facebookIcon from "../../assets/about/team/fb.png";
import twitterIcon from "../../assets/about/team/twitter.png";
import gmailIcon from "../../assets/about/team/gmail.png";
import linkedinIcon from "../../assets/about/team/linkedin.png";

const Introduction = ({
  name,
  intro,
  image,
  fbLink,
  twitterLink,
  linkedInLink,
  gmailLink,
}) => {
  const renderIcons = () => {
    const icons = [
      { icon: facebookIcon, link: fbLink },
      { icon: twitterIcon, link: twitterLink },
      { icon: gmailIcon, link: gmailLink },
      { icon: linkedinIcon, link: linkedInLink },
    ];

    return icons.map((item, index) => (
      <IconButton
        key={index}
        aria-label={item.label}
        onClick={() => {
          window.open(item.link, "_blank");
        }}
      >
        <img src={item.icon} width="50px" alt={item.label} />
      </IconButton>
    ));
  };

  return (
    <Container sx={{ marginY: 10 }}>
      <Row>
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Box marginLeft={2}>
            <Heading>{name}</Heading>
            <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
              <img
                src={image}
                width="200px"
                style={{ borderRadius: "10px" }}
                alt="Member Image"
              />
            </Box>
            <Typography paragraph>{intro}</Typography>
          </Box>
          {/* SOCIAL ICONS */}
          <Row sx={{ justifyContent: "start" }}>{renderIcons()}</Row>
        </Box>
        {/* MEMBER IMAGE */}
        <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
          <img
            src={image}
            width="350px"
            style={{ borderRadius: "20px" }}
            alt="Member Image"
          />
        </Box>
      </Row>
    </Container>
  );
};

export default Introduction;
