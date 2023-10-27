let slides = document.getElementsByClassName('slide');
let navlinks = document.getElementsByClassName('dot');
let currentSlide = 0;

document.getElementById("next").addEventListener("click" , () => {
    changeSlide(currentSlide + 1);
});
document.getElementById("prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1);
});

function changeSlide(moveTo){
//if slide = last item , and you press next button then, them restart........
if(moveTo >= slides.length){
    moveTo = 0;
}
if(moveTo < 0){
    //if you are at 0th index and press prev button then you will be directed to the last item.
    moveTo = slides.length - 1;
}
//toggling active classes------------
slides[currentSlide].classList.toggle("active");
  navlinks[currentSlide].classList.toggle("activedot");
  slides[moveTo].classList.toggle("active");
  navlinks[moveTo].classList.toggle("activedot");
  currentSlide = moveTo; 
}

//prev and next btn click done

//now dot clicks
document.querySelectorAll('.dot').forEach((bullet , bulletIndex) => {
bullet.addEventListener("click", () => {
    if(currentslide !== bulletIndex){
        changeSlide(bulletIndex);
    }
});
});

window.onload = setInterval(function (){
    changeSlide(currentSlide+1);
}, 3000);