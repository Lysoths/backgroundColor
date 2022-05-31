const container = document.querySelector(".container");
const button = document.querySelector("button");
const box = document.querySelector(".color-shower");
const body = document.querySelector("body");

console.log(container);
console.log(button);
console.log(box);

button.addEventListener("click", ()=> {
    const randomNumber =
    `rgba(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`
    body.style.backgroundColor=`${randomNumber}`;
    box.innerHTML=randomNumber;
})