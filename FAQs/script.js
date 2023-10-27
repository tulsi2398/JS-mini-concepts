/* what is the logic :- 
as soon as we click on the plus btn, shoe question text by adding show-text class to the question element.
bt default question-text is not visible, on the click event we are adding class which set the property display :  block

2. and by default minus is hidden, but when plus is clicked plus should disappear and minus must be visible.

3. then toggle all this.
 BUT THE TASK IS NOT THE ONLY TOGGLING,

 4. we want to close previous opened questions, when we click second question.

 two solutions:
 i) travesring DOM
 ii). Using selectors

*/

//selection all buttons

/*const btns = document.querySelectorAll(".question-btn");
//loop-over each buttons and add click event listeners
btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});*/


//2. method : using selectors.

// select all articles

const questions = document.querySelectorAll(".question");

questions.forEach(function (question){
    //console.log(item);
    const btn = question.querySelector('.question-btn');
    //console.log(btn);
    btn.addEventListener("click", function() {
        questions.forEach(function (item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");

    });

});

