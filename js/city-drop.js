let loc = document.getElementById("location")
let cityList = document.getElementById("city-drop");
let bg = document.getElementById("drop-bg");
let cities = document.getElementsByClassName("cities")[0];

loc.addEventListener("click", () => {
  cityList.classList.toggle("display");
  bg.classList.toggle("display");
});

bg.addEventListener("click", () => {
  bg.classList.remove("display");
  cityList.classList.remove("display");
});

document.getElementById("close-city-drop").addEventListener("click", () => {
  cityList.classList.remove("display");
  bg.classList.remove("display");
});

cities.addEventListener("click", (event) => {
  cities.getElementsByClassName("checked")[0].classList.remove("checked");
  event.target.classList.add("checked");
  loc.innerHTML = event.target.innerHTML;
  cityList.classList.remove("display");
});