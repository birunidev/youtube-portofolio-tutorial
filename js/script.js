const sidedrawer = document.querySelector(".sidedrawer");
const backdrop = document.querySelector(".backdrop");
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
  sidedrawer.classList.add("active");
  backdrop.classList.add("show");
});

backdrop.addEventListener("click", () => {
  sidedrawer.classList.remove("active");
  backdrop.classList.remove("show");
});
