const hexColors = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let btnClick = document.querySelector('.hero-btn');
let color = document.getElementById('color');

function randomIndex(){
    return Math.floor(Math.random() * hexColors.length);
}


let inter = setInterval(function() {
    let hexcolor = "#";
    for(i=0 ; i<6 ; i++){
        hexcolor += hexColors[randomIndex()];
    }
    document.body.style.backgroundColor = hexcolor;
color.textContent = hexcolor;
color.style.color = hexcolor;
btnClick.style.color = "white"


} , 500);

btnClick.onclick = function(){
    clearInterval(inter);
}