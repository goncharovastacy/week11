const cost1 = document.getElementById('price1');
const cost2 = document.getElementById('price2');
const cost3 = document.getElementById('price3');
const cost4 = document.getElementById('price4')
const price1 = Number(cost1.innerHTML);
const price2 = Number(cost2.innerHTML);
const price3 = Number(cost3.innerHTML);
const price4 = Number(cost4.innerHTML);
let sum = price1 + price2 + price3 + price4;
const total = document.getElementById('total');
total.innerHTML = `${sum} руб.`;
const button = document.getElementById('button');
function getDiscount(){
button.setAttribute('disabled', true);
const interest = 20;
let discountTotal = sum - (sum / 100 * interest);
cost1.innerHTML = price1 - (price1 / 100 * interest);
cost2.innerHTML = price2 - (price2 / 100 * interest);
cost3.innerHTML = price3 - (price3 / 100 * interest);
cost4.innerHTML = price4 - (price4 / 100 * interest);
total.innerHTML = `${discountTotal} руб.`;
}
button.addEventListener ('click', getDiscount);