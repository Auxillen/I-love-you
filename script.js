document.addEventListener("DOMContentLoaded", () => {
  const titleText = document.querySelector(".title h1");
  const roleText = document.querySelector(".role p");

  // Initially hide the text
  titleText.style.opacity = "0";
  roleText.style.opacity = "0";

  // Reveal the title after the first animation (1s)
  setTimeout(() => {
    titleText.style.transition = "opacity 0.5s ease-in-out";
    titleText.style.opacity = "1";
  }, 1000);

  // Reveal the role text after the second block animation (2s)
  setTimeout(() => {
    roleText.style.transition = "opacity 0.5s ease-in-out";
    roleText.style.opacity = "1";
  }, 2000);
});
