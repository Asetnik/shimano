let loc = document.getElementById("location")
let cityList = document.getElementById("city-drop");

loc.addEventListener("click", () => {
  cityList.classList.toggle("display");
});

document.getElementById("close-city-drop").addEventListener("click", () => {
  cityList.classList.remove("display");
});

let cities = document.getElementsByClassName("cities")[0];

cities.addEventListener("click", (event) => {
  cities.getElementsByClassName("checked")[0].classList.remove("checked");
  event.target.classList.add("checked");
  loc.innerHTML = event.target.innerHTML;
  cityList.classList.remove("display");
});