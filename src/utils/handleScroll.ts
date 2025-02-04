export const handleScroll = (id: string) => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
  } else {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};
