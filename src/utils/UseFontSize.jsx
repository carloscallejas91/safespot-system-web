import { useState, useEffect } from "react";

export const useFontSize = ({ smallFontSize, defaultFontSize }) => {
  const [fontSize, setFontSize] = useState("5rem");

  const updateFontSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767.98) {
      setFontSize(smallFontSize);
    } else {
      setFontSize(defaultFontSize);
    }
  };

  useEffect(() => {
    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  return fontSize;
};
