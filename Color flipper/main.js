const colors = [ "green", "red", "rgba(133,122,200)","#f15025"];

let btnClick = document.querySelector('.hero-btn');
let color = document.getElementById('color');

function getRandomPick(){
    return Math.floor(Math.random() * colors.length);
}

btnClick.addEventListener("click", function (){
    const randomNumber = getRandomPick();
document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
color.style.color = colors[randomNumber];

});

