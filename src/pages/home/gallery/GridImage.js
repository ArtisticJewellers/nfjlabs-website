import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";

const GridImage = ({ galleryItems }) => {
  return (
    <Box sx={{ width: "100%", height: "150%" }}>
      <ImageList sx={{ overflow: "visible" }} variant="woven" cols={6} gap={20}>
        {galleryItems.map((item) => (
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
                width="100%"
                style={{
                  borderRadius: "10px",
                }}
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
