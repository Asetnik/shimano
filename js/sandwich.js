let sandwich = document.getElementById("sandwich");
let rollUps = document.getElementsByClassName("roll-up");
let sandwichMenu = document.createElement("div");
sandwichMenu.classList.add("sandwich-menu");

for(let elem = 0; elem < rollUps.length; ++elem) {
  let rollUp = rollUps[elem].cloneNode(true);
  rollUp.classList.remove("roll-up");
  sandwichMenu.append(rollUp);
}
sandwichMenu.style.display = "none";
sandwich.parentElement.append(sandwichMenu);


sandwich.addEventListener("click", () => {
  sandwichMenu.classList.toggle("display");
});