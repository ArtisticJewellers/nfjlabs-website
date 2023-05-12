const getScreenSize = () => {
  const width = window.innerWidth;

  if (width < 600) {
    return "xs";
  } else if (width >= 600 && width < 900) {
    return "sm";
  } else if (width >= 900 && width < 1200) {
    return "md";
  } else if (width >= 1200 && width < 1536) {
    return "lg";
  } else {
    return "xl";
  }
};

export default getScreenSize;
