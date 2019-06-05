let requestCall = document.getElementById("request-call-drop");

requestCall.addEventListener("click", () => {
  document.getElementById("request-form").classList.toggle("display");
  bg.classList.toggle("display");
});

bg.addEventListener("click", () => {
  bg.classList.remove("display");
  document.getElementById("request-form").classList.remove("display");
});