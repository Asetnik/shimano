let slider = document.getElementsByClassName("slider")[0];
let h3 = slider.getElementsByTagName("h3")[0];
let firstLogoURL = slider.getElementsByClassName("logotypes")[0].getElementsByTagName("img")[0];
let secondLogoURL = slider.getElementsByClassName("logotypes")[0].getElementsByTagName("img")[1];
let p = slider.getElementsByTagName("p")[0];
let img = slider.getElementsByClassName("image")[0].getElementsByTagName("img")[0];
let leftArrow = slider.getElementsByClassName("left-arrow")[0];
let rightArrow = slider.getElementsByClassName("right-arrow")[0];
let content = slider.getElementsByClassName("content-wrap")[0];

let slides = [
    {
        h3: "каткушка безынерционная",
        firstLogoURL: "img/slider-logo11.png",
        secondLogoURL: "img/slider-logo12.png",
        p: "Портрет потребителя разнородно переворачивает фирменный стиль. Наряду с этим, создание приверженного покупателя развивает культурный пак-шот. Нестандартный подход отталкивает стиль менеджмента.",
        imgURL: "img/slider-img1.png"
    },
    {
        h3: "леска флюрокарбоновая",
        firstLogoURL: "img/slider-logo21.png",
        secondLogoURL: "img/slider-logo22.png",
        p: "Лидер среди флюорокарбоновых лесок. Прекрасное качество и высокая работоспособность. Быстротонущая. Низкий светопреломляющий коэффициент лески делает ее незаметной в воде. Все эти качества позволяют доставить Вашу приманку в точку ловли точнее и быстрее, чем нейлоновая леска.",
        imgURL: "img/slider-img2.png"
    },
    {
        h3: "eeeeeeeeeeee",
        firstLogoURL: "img/slider-logo11.png",
        secondLogoURL: "img/slider-logo22.png",
        p: "Портрет потребителя разнородно переворачивает фирменный стиль. Наряду с этим, создание приверженного покупателя развивает культурный пак-шот. Нестандартный подход отталкивает стиль менеджмента.",
        imgURL: "img/category-item1.png"
    },
];

let i = 0;
let slideTime = 5000;
let firstTimer;
let animationTime = 500;

function slide(i, animation) {
    content.style.display = "none";
    h3.innerText = slides[i].h3;
    firstLogoURL.src = slides[i].firstLogoURL;
    secondLogoURL.src = slides[i].secondLogoURL;
    p.innerText = slides[i].p;
    img.src = slides[i].imgURL;
    i++;

    if( i >= slides.length ) {
        i = 0;
    }
    animation();
    firstTimer = setTimeout( slide, slideTime, i, rightAnimation);
}
slide(i, rightAnimation);


rightArrow.addEventListener("click", () => {
    clearTimeout(firstTimer);
    i++;
    if( i >= slides.length ){
        i = 0;
    }
    slide(i, rightAnimation);
});

leftArrow.addEventListener("click", () => {
    clearTimeout(firstTimer);
    i--;
    if( i < 0 ){
        i = slides.length - 1;
    }
    slide(i, leftAnimation);
});

function rightAnimation() {
    document.body.style.overflowX = "hidden";
    let start = Date.now();
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;

        if (timePassed >= animationTime) {
            clearInterval(timer);
            document.body.style.overflowX = "auto";
            return;
        }
        content.style.display = "grid";
        drawRightContent(timePassed);
    }, 20);
}

function leftAnimation() {
    document.body.style.overflowX = "hidden";
    content.minWidth = content.parentElement.offsetWidth;
    let start = Date.now();
    let timer = setInterval(() => {
        let timePassed = Date.now() - start;

        if (timePassed >= animationTime) {
            clearInterval(timer);
            document.body.style.overflowX = "auto";
            return;
        }
        content.style.display = "grid";
        drawLeftContent(timePassed);
    }, 20);
}

function drawRightContent(timePassed) {
    content.style.marginLeft = 10 - content.offsetWidth + timePassed / (animationTime / content.offsetWidth) + "px";
}

function drawLeftContent(timePassed) {
    content.style.paddingLeft = content.offsetWidth - timePassed / (animationTime / content.offsetWidth) + "px";
}