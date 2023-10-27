// local reviews data
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'img/pexels-christina-morillo-1181725.jpg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'img/pexels-edmond-dantès-4342352.jpg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'img/pexels-emmy-e-2381069.jpg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'karolina Grabowska ',
        job: 'the boss',
        img: 'img/pexels-karolina-grabowska-7876506.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 5,
        name: 'Vitthal parshottam',
        job: 'full stack developer',
        img: 'img/pexels-linkedin-sales-navigator-2182970.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },

    {
        id: 6,
        name: 'bhupat Ramji',
        job: 'Fron-end developer',
        img: 'img/pexels-pixabay-220453.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
    {
        id: 7,
        name: 'Alex Starnes',
        job: 'HR Manager',
        img: 'img/pexels-alex-starnes-6579980.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    }
];

//get all the items from index.html

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

//buttons
const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
//const randombtn = document.querySelector('.random-btn');

//set starting item.
let currentItem = 0;

//load initial items , by adding revent listener when the DOM is loaded.
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});
function showPerson(person) {
    //accessing first item, stroing it into a variable..
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//setting btn event listeners..

nextbtn.addEventListener("click" , function (){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevbtn.addEventListener("click" , function (){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1 ;
    }
    showPerson(currentItem);
});

window.onload = setInterval(function () {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
},3000);





