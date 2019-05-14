let elementsLink = document.getElementsByClassName("top-element-link");

for(let i = 0; i < elementsLink.length; ++i) {
  elementsLink[i].addEventListener("click", (e) => {
    let elementClone = e.target.parentElement.parentElement.cloneNode(true);
    let clearfix = document.createElement("div");
    clearfix.classList.add("clearfix");
    elementClone.classList.add("top-element-drop");
    elementClone.getElementsByClassName("code")[0].remove();
    elementClone.getElementsByClassName("btn")[0].remove();
    elementClone.insertAdjacentElement("beforeEnd", clearfix);
    elementClone.insertAdjacentHTML("beforeEnd", `<i class="fa fa-times" aria-hidden="true"></i>`);
    let costWrap = document.createElement("div");
    costWrap.classList.add("cost-wrap");
    costWrap.insertAdjacentHTML("beforeEnd", `
      <div class="amount">
        <i class="fa fa-minus" aria-hidden="true"></i>
        <input type="text" class="amount-value" value="1">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </div>
    `);
    costWrap.insertAdjacentElement("beforeEnd", elementClone.getElementsByClassName("cost")[0]);
    elementClone.insertAdjacentElement("beforeEnd", costWrap);
    let buy = document.createElement("button");
    let continueShopping = document.createElement("h2");
    let actions = document.createElement("div");
    actions.classList.add("actions");
    continueShopping.innerText = "Продолжить покупки";
    buy.classList.add("btn");
    buy.innerText = "Оформить заказ";
    actions.append(continueShopping);
    actions.append(buy);
    elementClone.insertAdjacentElement("beforeEnd", clearfix.cloneNode(true));
    elementClone.insertAdjacentElement("beforeEnd", actions);
  
    document.body.append(elementClone);

    let amount = elementClone.getElementsByClassName("amount-value")[0];
    let amountValue = parseInt(amount.value);
    let plus = elementClone.getElementsByClassName("fa-plus")[0];
    let minus = elementClone.getElementsByClassName("fa-minus")[0];
    let cost =  parseInt(elementClone.getElementsByClassName("cost")[0].innerText);
    plus.addEventListener("click", () =>{
      amountValue++;
      elementClone.getElementsByClassName("amount-value")[0].value = amountValue;
      elementClone.getElementsByClassName("cost")[0].innerHTML = `${cost * amountValue} <span>руб.</span>`;
    });
    minus.addEventListener("click", () =>{
      amountValue--;
      elementClone.getElementsByClassName("amount-value")[0].value = amountValue;
      elementClone.getElementsByClassName("cost")[0].innerHTML = `${cost * amountValue} <span>руб.</span>`;
    });

    amount.addEventListener("change", () => {
      amountValue = parseInt(amount.value);
      elementClone.getElementsByClassName("cost")[0].innerHTML = `${cost * amountValue} <span>руб.</span>`;
    });

    elementClone.getElementsByClassName("fa-times")[0].addEventListener("click", () => {
      elementClone.style.display = "none";
    });
    continueShopping.addEventListener("click", () => {
      elementClone.style.display = "none";
    });
  });
}