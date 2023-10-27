// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navtoggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
/* logic is we are going to check if show-links class is present in the element or not, if present then remove and if not then add. show-links class has only one property which add height to the ul elements. hence removing and adding on the button clicks this class to an element*/
navtoggle.addEventListener("click", function () {
    
// without using toggle.
   /* if(links.classList.contains("show-links")){
        links.classList.remove("show-links");
    }
    else{
        links.classList.add("show-links");
    }*/

// using toggle, and optimizing code. The toggle() method toggles between hide() and show() for the selected elements.
    links.classList.toggle("show-links");
});



