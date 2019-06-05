let catalogLink = document.getElementById("catalog-drop-link");

catalogLink.addEventListener("click", () => {
  document.getElementById("catalog-drop").classList.toggle("display");
  bg.classList.toggle("display");
});

bg.addEventListener("click", () => {
  bg.classList.remove("display");
  document.getElementById("catalog-drop").classList.remove("display");
});