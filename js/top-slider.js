let topElementsInfo = [
    {
        imgURL: "img/top-item1.png",
        code: "32456",
        productType: "Удилища болонские",
        model: "SHIMANO ULTEGRA SUPER AX TR TE GT 7-440",
        cost: 18990 ,
        weight: "100 гр.",
        length: "198 см.",
        coil: "6 шт.",
        sections: "2 шт."
    },
    {
        imgURL: "img/top-item2.png",
        code: "32456",
        productType: "Катушка безынерционная",
        model: "SHIMANO ULTEGRA 35XSD COMP",
        cost: 25520 ,
        weight: "100 гр.",
        length: "198 см.",
        coil: "6 шт.",
        sections: "2 шт."
    },
    {
        imgURL: "img/top-item3.png",
        code: "32456",
        productType: "Леска монофильная",
        model: "SHIMANO ASPIRE \"SILK SHOCK\" 0.125мм, 50м, 1.7кг",
        cost: 3333 ,
        weight: "100 гр.",
        length: "198 см.",
        coil: "6 шт.",
        sections: "2 шт."
    },
    {
        imgURL: "img/top-item4.png",
        code: "32456",
        productType: "Приманки воблеры",
        model: "RAPALA X-RAP COUNTDOWN 4гр (5см) 0.6-1.2м",
        cost: 16720 ,
        weight: "100 гр.",
        length: "198 см.",
        coil: "6 шт.",
        sections: "2 шт."
    },
    {
        imgURL: "img/top-item5.png",
        code: "32456",
        productType: "Катушка",
        model: "SHIMANO ULTEGRA SUPER AX TR TE GT 7-440",
        cost: 11000 ,
        weight: "100 гр.",
        length: "198 см.",
        coil: "6 шт.",
        sections: "2 шт."
    },
    {
        imgURL: "img/top-item6.png",
        code: "32456",
        productType: "Блесна",
        model: "SHIMANO ULTEGRA SUPER AX TR TE GT 7-440",
        cost: 15000 ,
        weight: "100 гр.",
        length: "198 см.",
        coil: "6 шт.",
        sections: "2 шт."
    },
];

let topSection = document.getElementsByClassName("top")[0];
let topItems = document.getElementsByClassName("top-element");
let topLeftArrow = topSection.getElementsByClassName("arrow-left")[0];
let topLeftRight = topSection.getElementsByClassName("arrow-right")[0];
let needElem = 0;

drawTopItems(needElem);


topLeftArrow.addEventListener("click", () => {
    needElem--;
    drawTopItems(needElem);
});

topLeftRight.addEventListener("click", () => {
    needElem++;
    drawTopItems(needElem);
});

function drawTopItems(needElem) {
    needElem = needElem % topElementsInfo.length;
    for (let i = 0; i < topItems.length; i++) {
        if(i + needElem < 0) {
            topItems[i].getElementsByTagName("img")[0].src = topElementsInfo[i + topElementsInfo.length + needElem].imgURL;
            let info = topItems[i].getElementsByClassName("info")[0];
            info.getElementsByClassName("code")[0].childNodes[1].nodeValue = topElementsInfo[i + topElementsInfo.length + needElem].code;
            info.getElementsByClassName("product-type")[0].innerText = topElementsInfo[i + topElementsInfo.length + needElem].productType;
            info.getElementsByClassName("model")[0].innerText = topElementsInfo[i + topElementsInfo.length + needElem].model;
            info.getElementsByClassName("cost")[0].childNodes[0].nodeValue = topElementsInfo[i + topElementsInfo.length + needElem].cost + " ";
            info.getElementsByTagName("p")[4].childNodes[1].nodeValue = topElementsInfo[i + topElementsInfo.length + needElem].weight;
            info.getElementsByTagName("p")[5].childNodes[1].nodeValue = topElementsInfo[i + topElementsInfo.length + needElem].length;
            info.getElementsByTagName("p")[6].childNodes[1].nodeValue = topElementsInfo[i + topElementsInfo.length + needElem].coil;
            info.getElementsByTagName("p")[7].childNodes[1].nodeValue = topElementsInfo[i + topElementsInfo.length + needElem].sections;
            continue;
        }

        if(i + needElem > topElementsInfo.length - 1) {
            topItems[i].getElementsByTagName("img")[0].src = topElementsInfo[i - topElementsInfo.length + needElem].imgURL;
            let info = topItems[i].getElementsByClassName("info")[0];
            info.getElementsByClassName("code")[0].childNodes[1].nodeValue = topElementsInfo[i - topElementsInfo.length + needElem].code;
            info.getElementsByClassName("product-type")[0].innerText = topElementsInfo[i - topElementsInfo.length + needElem].productType;
            info.getElementsByClassName("model")[0].innerText = topElementsInfo[i - topElementsInfo.length + needElem].model;
            info.getElementsByClassName("cost")[0].childNodes[0].nodeValue = topElementsInfo[i - topElementsInfo.length + needElem].cost + " ";
            info.getElementsByTagName("p")[4].childNodes[1].nodeValue = topElementsInfo[i - topElementsInfo.length + needElem].weight;
            info.getElementsByTagName("p")[5].childNodes[1].nodeValue = topElementsInfo[i - topElementsInfo.length + needElem].length;
            info.getElementsByTagName("p")[6].childNodes[1].nodeValue = topElementsInfo[i - topElementsInfo.length + needElem].coil;
            info.getElementsByTagName("p")[7].childNodes[1].nodeValue = topElementsInfo[i - topElementsInfo.length + needElem].sections;
            continue;
        }

        topItems[i].getElementsByTagName("img")[0].src = topElementsInfo[i + needElem].imgURL;
        let info = topItems[i].getElementsByClassName("info")[0];
        info.getElementsByClassName("code")[0].childNodes[1].nodeValue = topElementsInfo[i + needElem].code;
        info.getElementsByClassName("product-type")[0].innerText = topElementsInfo[i + needElem].productType;
        info.getElementsByClassName("model")[0].innerText = topElementsInfo[i + needElem].model;
        info.getElementsByClassName("cost")[0].childNodes[0].nodeValue = topElementsInfo[i + needElem].cost + " ";
        info.getElementsByTagName("p")[4].childNodes[1].nodeValue = topElementsInfo[i + needElem].weight;
        info.getElementsByTagName("p")[5].childNodes[1].nodeValue = topElementsInfo[i + needElem].length;
        info.getElementsByTagName("p")[6].childNodes[1].nodeValue = topElementsInfo[i + needElem].coil;
        info.getElementsByTagName("p")[7].childNodes[1].nodeValue = topElementsInfo[i + needElem].sections;

    }
}