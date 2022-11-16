closeMenu = () => {
  console.log("close");
  document.querySelector(".backDrop").classList.remove("active");
  document.querySelector("aside").classList.remove("active");
};
openMenu = () => {
  document.querySelector(".backDrop").classList.add("active");
  document.querySelector("aside").classList.add("active");
};
document.getElementById("menuBtn").addEventListener("click", (e) => {
  e.preventDefault();
  openMenu();
});

document.querySelector(".close").addEventListener("click", () => {
  closeMenu();
});
document.querySelector(".backDrop").addEventListener("click", () => {
  closeMenu();
});

//                                                               Scroll Events
document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onTheWayTo = null;

document.addEventListener("scroll", () => {
  const direction =
    window.pageYOffset - document.lastScrollPosition > 0 ? "down" : "up";
    console.log(direction);
  const sections = [...document.querySelectorAll("section")];

  if (document.onTheWayTo === null) {
    const destinationIndex = direction == "up" ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destinationIndex >= 0 && destinationIndex <= sections.length) {
      document.onTheWayTo = destinationIndex;
      window.scroll(0, sections[destinationIndex].offsetTop);
    }
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
        section.classList.add('active');    
      document.lastCentered = index;
      if (document.onTheWayTo === index) {
        document.onTheWayTo = null;
        console.log(document.onTheWayTo);
      }
    }else{
        section.classList.remove('active')
    }
  });

  document.lastScrollPosition = window.pageYOffset;
});
