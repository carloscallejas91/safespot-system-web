export const fontSizeTitle = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "4rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "3rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "2rem";
  }
};

export const fontSizeSecondaryTitle = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "6rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "4rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "2.7rem";
  }
};

export const fontSizeTerciaryTitle = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "2.5rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "2.2rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "2rem";
  }
};

export const fontSizeText = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "1.5rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "1.2rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "1rem";
  }
};

export const fontSizeParagraph = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "1.1rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "1.1rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "1rem";
  }
};

export const lineHeightTitle = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "5rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "3.50rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "2.20rem";
  }
};

export const lineHeightTerciaryTitle = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "3rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "2.50rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "2.20rem";
  }
};

export const lineHeightText = (breakpoint) => {
  if (breakpoint.xl || breakpoint.xxl) {
    return "2rem";
  } else if (breakpoint.md || breakpoint.lg) {
    return "2rem";
  } else if (breakpoint.xs || breakpoint.sm) {
    return "1.5rem";
  }
};
