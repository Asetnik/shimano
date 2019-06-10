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
        h3: "Супермегакрутая катушка",
        firstLogoURL: "img/slider-logo11.png",
        secondLogoURL: "img/slider-logo22.png",
        p: "Портрет потребителя разнородно переворачивает фирменный стиль. Наряду с этим, создание приверженного покупателя развивает культурный пак-шот. Нестандартный подход отталкивает стиль менеджмента.",
        imgURL: "img/slider-img1.png"
    },
];

let slider = document.getElementsByClassName("slider")[0];
let h3 = slider.getElementsByTagName("h3")[0];
let firstLogoURL = slider.getElementsByClassName("logotypes")[0].getElementsByTagName("img")[0];
let secondLogoURL = slider.getElementsByClassName("logotypes")[0].getElementsByTagName("img")[1];
let p = slider.getElementsByTagName("p")[0];
let img = slider.getElementsByClassName("image")[0].getElementsByTagName("img")[0];
let leftArrow = slider.getElementsByClassName("left-arrow")[0];
let rightArrow = slider.getElementsByClassName("right-arrow")[0];
let content = slider.getElementsByClassName("content-wrap")[0];

let slideNum = 0;
let slideTime = 5000;
let firstTimer;
let animationTime = 500;

function slide(animation) {
    slideNum = slideNum % slides.length;
    animation(slideNum);
    firstTimer = setTimeout(()=> {
        slideNum++;
        slide(rightAnimation)
    }, slideTime);
}
slide(rightAnimation);

rightArrow.addEventListener("click", () => {
    clearTimeout(firstTimer);
    slideNum++;
    slide(rightAnimation);
});

leftArrow.addEventListener("click", () => {
    clearTimeout(firstTimer);
    console.log(slideNum);
    slideNum--;
    if( slideNum < 0 ){
        slideNum = slides.length - 1;
    }
    slide(leftAnimation);
});

function rightAnimation() {
    let start = Date.now();

    let timerLeave = setInterval(() => {
        console.log("right anim");
        let timePassed = Date.now() - start;
        if (timePassed >= animationTime) {
            clearInterval(timerLeave);
            content.style.display = "none";
            content.style.transform = "none";

            h3.innerText = slides[slideNum].h3;
            firstLogoURL.src = slides[slideNum].firstLogoURL;
            secondLogoURL.src = slides[slideNum].secondLogoURL;
            p.innerText = slides[slideNum].p;
            img.src = slides[slideNum].imgURL;
            console.log("pomen");
            come();
            return;
        }
        drawLeaveLeft(timePassed);
    },20);

    function come() {
        let timerCome = setInterval(() => {
            console.log("come");
            let timePassed = Date.now() - start - 500;
            if (timePassed >= animationTime) {
                clearInterval(timerCome);
                content.style.transform = "none";
                console.log("come end");
                return;
            }
            content.style.display = "grid";
            drawComeLeft(timePassed);
        }, 20);
    }
}

function leftAnimation() {
    let start = Date.now();

    let timerLeave = setInterval(() => {
        let timePassed = Date.now() - start;
        if (timePassed >= animationTime) {
            clearInterval(timerLeave);
            content.style.display = "none";
            content.style.transform = "none";

            h3.innerText = slides[slideNum].h3;
            firstLogoURL.src = slides[slideNum].firstLogoURL;
            secondLogoURL.src = slides[slideNum].secondLogoURL;
            p.innerText = slides[slideNum].p;
            img.src = slides[slideNum].imgURL;

            come();
            return;
        }
        drawLeaveRight(timePassed);
    },20);

    function come() {
        let timerCome = setInterval(() => {
            let timePassed = Date.now() - start - 500;
            if (timePassed >= animationTime) {
                clearInterval(timerCome);
                content.style.transform = "none";
                return;
            }
            content.style.display = "grid";
            drawComeRight(timePassed);
        }, 20);
    }
}

function drawLeaveLeft(timePassed) {
    content.style.transform = "translateX(-" + (timePassed * (content.parentElement.offsetWidth / animationTime)) + "px)";
}

function drawComeLeft(timePassed) {
    content.style.transform = "translateX(" + (content.parentElement.offsetWidth - timePassed * (content.parentElement.offsetWidth / animationTime)) + "px)";
}

function drawLeaveRight(timePassed) {
    content.style.transform = "translateX(" + (timePassed * (content.parentElement.offsetWidth / animationTime)) + "px)";
}

function drawComeRight(timePassed) {
    content.style.transform = "translateX(" + (- content.parentElement.offsetWidth + timePassed * (content.parentElement.offsetWidth / animationTime)) + "px)";
}