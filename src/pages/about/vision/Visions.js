import { Box } from "@mui/material";
import React from "react";
import Row from "../../../components/common/Row";
import VisionCard from "./VisionCard";

import v1 from "../../../assets/about/visions/v1.png";
import v2 from "../../../assets/about/visions/v2.png";
import v3 from "../../../assets/about/visions/v3.png";
import v4 from "../../../assets/about/visions/v4.png";

const Visions = () => {
  const visions = [
    {
      title: "Jewellery",
      description:
        "NFJ Labs presents a breathtaking collection of jewellery that seamlessly merges classic allure with contemporary elegance. Each meticulously crafted piece showcases our unwavering commitment to exceptional quality and exquisite design, offering you a world of timeless beauty.",
      img: v1,
    },
    {
      title: "Gems",
      description:
        "Embark on a mesmerizing journey with NFJ Labs' curated selection of breathtaking gemstones. From dazzling diamonds to captivating colored gems, our handpicked collection radiates brilliance and splendor, allowing you to create truly captivating and personalized jewellery pieces.",
      img: v2,
    },
    {
      title: "Coins",
      description:
        "Discover the world of numismatic wonders with our exceptional coin collection. From rare treasures to historical marvels, each coin tells a captivating story and embodies the rich heritage of numismatics, making them prized additions to any discerning collector's portfolio.",
      img: v3,
    },
    {
      title: "Exclusive Collection",
      description:
        "Indulge in NFJ Labs' exclusive collection, where extraordinary artistry meets unparalleled design. With limited editions and unique masterpieces, this curated selection epitomizes luxury and sophistication, ensuring that you make a statement that is truly one-of-a-kind. Elevate your style with our exquisite and distinctive creations.",
      img: v4,
    },
  ];

  return (
    <>
      <Row sx={{ width: "100%", flexWrap: "wrap" }}>
        {visions.map((vision) => (
          <VisionCard vision={vision} />
        ))}
      </Row>
    </>
  );
};

export default Visions;
