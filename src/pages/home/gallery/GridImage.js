import { Box, ImageList, ImageListItem } from "@mui/material";
import React from "react";

const GridImage = ({ galleryItems }) => {
  return (
    <Box sx={{ width: "100%"}}>
      <ImageList variant="woven" cols={6} gap={10}>
        {galleryItems.map((item) => (
          <ImageListItem key={item.img}>
            <img
            style={{borderRadius:"10px"}}
              src={`${item.img}?w=600&fit=contain&auto=format`}
              srcSet={`${item.img}?w=600&fit=contain&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GridImage;
