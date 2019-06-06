let categoryItemsInfo = [
    {
        imgURL: "img/category-item1.png",
        h3: "Эхолоты",
        link: "#"
    },
    {
        imgURL: "img/category-item2.png",
        h3: "Спининги Shimano",
        link: "#"
    },
    {
        imgURL: "img/category-item3.png",
        h3: "Катушки с байтраннером",
        link: "#"
    },
    {
        imgURL: "img/category-item4.png",
        h3: "Автоматизированный рыбак",
        link: "#"
    }
];

let categoryItems = document.getElementsByClassName("category-elem");
let categoryLeftArrow = document.getElementsByClassName("category")[0].getElementsByClassName("arrow-left")[0];
let categoryRightArrow = document.getElementsByClassName("category")[0].getElementsByClassName("arrow-right")[0];
let categoryItemsWrap = document.getElementsByClassName("items-wrap")[0];
let firstElem = 0;

categoryItemsWrap.style.gridTemplateColumns = "1fr 1fr 2fr";
drawCategory(firstElem);

categoryLeftArrow.addEventListener("click", () => {
    let gridTemplate = categoryItemsWrap.style.getPropertyValue("grid-template-columns");
    let arrGridTemplate = gridTemplate.split(" ");
    firstElem--;
    drawCategory(firstElem);
    let indexOfFr = arrGridTemplate.indexOf("2fr");
    arrElemSwap(arrGridTemplate, indexOfFr, indexOfFr + 1);
    categoryItemsWrap.style.gridTemplateColumns = arrGridTemplate.join(" ");
});

categoryRightArrow.addEventListener("click", () => {
    let gridTemplate = categoryItemsWrap.style.getPropertyValue("grid-template-columns");
    let arrGridTemplate = gridTemplate.split(" ");
    firstElem++;
    drawCategory(firstElem);
    let indexOfFr = arrGridTemplate.indexOf("2fr");
    arrElemSwap(arrGridTemplate, indexOfFr, indexOfFr - 1);
    categoryItemsWrap.style.gridTemplateColumns = arrGridTemplate.join(" ");
});

function drawCategory(firstElem) {
    firstElem = firstElem % categoryItemsInfo.length;
    for (let i = 0; i < categoryItems.length; i++) {
        if(i + firstElem < 0) {
            categoryItems[i].getElementsByTagName("img")[0].src = categoryItemsInfo[i + categoryItemsInfo.length + firstElem].imgURL;
            categoryItems[i].getElementsByTagName("h3")[0].innerText = categoryItemsInfo[i + categoryItemsInfo.length + firstElem].h3;
            continue;
        }
        if(i + firstElem > categoryItemsInfo.length - 1) {
            categoryItems[i].getElementsByTagName("img")[0].src = categoryItemsInfo[i - categoryItemsInfo.length  + firstElem].imgURL;
            categoryItems[i].getElementsByTagName("h3")[0].innerText = categoryItemsInfo[i - categoryItemsInfo.length  + firstElem].h3;
            continue;
        }
        categoryItems[i].getElementsByTagName("img")[0].src = categoryItemsInfo[i  + firstElem].imgURL;
        categoryItems[i].getElementsByTagName("h3")[0].innerText = categoryItemsInfo[i + firstElem].h3;
    }
}

function arrElemSwap(arr, i, j) {
    if(j == -1) {
        j = arr.length;
    }
    if(j == arr.length) {
        j = 0;
    }
    let buf = arr[i];
    arr[i] = arr[j];
    arr[j] = buf;
}