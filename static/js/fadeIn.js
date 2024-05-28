window.addEventListener("scroll", function () {
  const element = document.querySelector(".experience");
  const position = element.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (position < windowHeight / 1.3) {
    element.classList.add("experience-in");
  } else {
    element.classList.remove("experience-in");
  }
});
