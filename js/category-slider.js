let categoryItemsInfo = [
    {
        imgURL: "img/category-item1.png",
        h3: "Эхолоты",
        link: "#",
        width: 1
    },
    {
        imgURL: "img/category-item2.png",
        h3: "Спининги Shimano",
        link: "#",
        width: 1
    },
    {
        imgURL: "img/category-item3.png",
        h3: "Катушки с байтраннером",
        link: "#",
        width: 2
    },
    {
        imgURL: "img/category-item4.png",
        h3: "Автоматизированный рыбак",
        link: "#",
        width: 1
    }
];

let categoryItems = document.getElementsByClassName("category-elem");
let categoryLeftArrow = document.getElementsByClassName("category")[0].getElementsByClassName("arrow-left")[0];
let categoryRightArrow = document.getElementsByClassName("category")[0].getElementsByClassName("arrow-right")[0];
let categoryItemsWrap = document.getElementsByClassName("items-wrap")[0];
let firstElem = 0;

categoryItemsWrap.style.gridTemplateColumns = `${categoryItemsInfo[firstElem].width}fr ${categoryItemsInfo[firstElem + 1].width}fr ${categoryItemsInfo[firstElem + 2].width}fr`;

drawCategory(firstElem);

categoryLeftArrow.addEventListener("click", () => {
    firstElem--;
    if( firstElem < 0 ){
        firstElem = categoryItemsInfo.length - 1;
    }
    firstElem = firstElem % categoryItemsInfo.length;
    drawCategory(firstElem);
    categoryItemsWrap.style.gridTemplateColumns = `${categoryItemsInfo[firstElem].width}fr ${categoryItemsInfo[(firstElem + 1) % categoryItemsInfo.length].width}fr ${categoryItemsInfo[(firstElem + 2) % categoryItemsInfo.length].width}fr`;
});

categoryRightArrow.addEventListener("click", () => {
    firstElem++;
    firstElem = firstElem % categoryItemsInfo.length;
    drawCategory(firstElem);
    categoryItemsWrap.style.gridTemplateColumns = `${categoryItemsInfo[firstElem].width}fr ${categoryItemsInfo[(firstElem + 1) % categoryItemsInfo.length].width}fr ${categoryItemsInfo[(firstElem + 2) % categoryItemsInfo.length].width}fr`;
});

function drawCategory(firstElem) {
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