export const heightSection = (breakpoint) => {
  if (breakpoint) {
    if (breakpoint.lg || breakpoint.xl || breakpoint.xxl) {
      return "100vh";
    } else {
      return "auto";
    }
  }
};

export const heightColumn = (breakpoint) => {
  if (breakpoint) {
    if (breakpoint.xl || breakpoint.xxl) {
      return "100%";
    } else {
      return "auto";
    }
  }
};
