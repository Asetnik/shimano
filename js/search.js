let searchIcon = document.getElementsByClassName("search-element")[0].getElementsByTagName("i")[0];
let searchInput = document.getElementsByClassName("search-wrap")[0];
let input = searchInput.getElementsByTagName("input")[0];

searchIcon.addEventListener("click", () => {
    let start = Date.now();
    let animationTime = 500;
    bg.classList.add("display");

    let timer = setInterval(() => {
        searchInput.classList.add("display");
        let timePassed = Date.now() - start;

        if (timePassed >= animationTime) {
            clearInterval(timer);
            document.body.style.overflowX = "auto";
            return;
        }
        input.style.width = timePassed / 1.5 + "px";
    }, 20);
});

bg.addEventListener("click", () => {
    bg.classList.remove("display");
    searchInput.classList.remove("display");
});