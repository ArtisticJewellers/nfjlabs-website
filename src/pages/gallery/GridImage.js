import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import getScreenSize from "../../helpers/getScreenSize";

const GridImage = ({ galleryItems }) => {
  const screenSize = getScreenSize();
  return (
    <Box sx={{ width: "100%", height: "150%" }}>
      <ImageList
        sx={{ overflow: "visible" }}
        variant="woven"
        cols={6}
        gap={screenSize === "xs" ? 5 : 20}
      >
        {galleryItems.map((item, index) => (
          <ImageListItem key={item.img}>
            <Box
              sx={{
                width: "100%",
                transition: "transform 0.5s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <img
                style={{ borderRadius: "10px" }}
                width="100%"
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
              />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GridImage;
