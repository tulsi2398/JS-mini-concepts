const menuToggle = document.querySelector(".sidebar-toggle");
const closedBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click" , function () {
    sidebar.classList.toggle("show-sidebar");
});
closedBtn.addEventListener("click", function (){
    sidebar.classList.remove("show-sidebar");
})

