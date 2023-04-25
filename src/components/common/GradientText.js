import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const GradientTypography = styled(Typography)(({ theme }) => ({
  backgroundImage:
    "linear-gradient(90deg, #000000 -4.69%, #ECA830 48.02%, #000000 103.89%)",
  backgroundClip: "text",
  color: "transparent",
  fontWeight: 700,
}));

const GradientText = ({ text }) => {
  return <GradientTypography variant="h4">{text}</GradientTypography>;
};

export default GradientText;
