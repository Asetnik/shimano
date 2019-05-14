let types = document.getElementsByClassName("type");

for(let i = 0; i < types.length; ++i) {
  types[i].addEventListener("click", () => {
    types[i].childNodes[3].classList.toggle("display");
  });
}