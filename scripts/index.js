const currentLinks = document.querySelectorAll("a li");
const mediaquery = window.matchMedia("(max-width: 1250px)");
const navBarToggle = document.getElementById("js-navbar-toggle");
const navBar = document.getElementById("navbar");
const doc = document.getElementById("main-doc");

currentLinks.forEach(link => {
  link.addEventListener("click", () => {
    currentLinks.forEach(i => i.classList.remove("active"));
    link.classList.add("active");

    if (mediaquery.matches) {
      navBar.classList.toggle("navbar-active");
      doc.classList.toggle("main-active");
      navBarToggle.classList.toggle("open");
    }
  });
});

navBarToggle.addEventListener("click", () => {
  navBar.classList.toggle("navbar-active");
  doc.classList.toggle("main-active");
  navBarToggle.classList.toggle("open");
});
