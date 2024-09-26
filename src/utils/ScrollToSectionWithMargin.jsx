export const scrollToSectionWithMargin = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = window.innerHeight * 0.5; 
    const elementPosition =
      section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};
