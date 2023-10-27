const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "images/beverage-4908765_1280.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "images/curry-7249247_1280.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "images/strawberry-3304967_1280.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "images/breakfast-1804457_1280.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "images/fresh-fruits-2305192_1280.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "images/beverage-4908765_1280.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "images/bread-18987_1280.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "images/pasta-1854245_1920.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "images/coffee-1583552_1280.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Rajasthani Thaali",
    category: "dinner",
    price: 20.99,
    img: "images/chicken-2451482_1280.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "Rajasthani Thaali",
    category: "coldDrinks",
    price: 20.99,
    img: "images/chicken-2451482_1280.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

//DOMloaded event - when my page loads , access menu and dynamically populate these items in section-center element.

const sectionCenter = document.querySelector('.section-center'); // select parent
const btnContainer = document.querySelector('.btn-container');

window.addEventListener("DOMContentLoaded", function () {
  displayItems(menu);
  displayButtons();
});

//what happenes when new data came up with new category? : would you add new button each ad every time when new data come up or you will set this button dynamically?

function displayItems(menuItem) {   
  //pass an array.

  let displayMenu = menuItem.map(function (item) {

    //what will map method do is, you can perform an operation on each array items and map method returns a modified array.
    return ` <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}
            </p>
        </div>
    </article>`;   // return 9 different items with html structure. 
  });


  displayMenu = displayMenu.join(" ");  //now override displayMenu , join the whole 9 items by space and make a string.
  sectionCenter.innerHTML = displayMenu;  //now put this giant string in parent section-center element:
}

function displayButtons(){
  // RETRUNING UNIQUE CATEGORIES FROM MENU,buttons for only unique categories.

  const categories = menu.reduce(function (values, item) {
    //if the item is already in the array, then just not add simply print or add the new values.
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['all']);

  // logic is all the unique categories will be store here and make them a button just like the previous displayitems function.
  
  const catogoriesBTN = categories.map(function (category) 
  {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
  }).join(' ');

console.log(catogoriesBTN);
btnContainer.innerHTML = catogoriesBTN;

const filterbtns = btnContainer.querySelectorAll(".filter-btn"); //you can access the btns once they are been made dynamically. hence this part is here.
// second thing you don't have to track the whole document, instead you can traverse the parent element.

filterbtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let category = e.currentTarget.dataset.id; // on the element, we can add attribute with data prefix
    // use this to match with menu's category, is it is same the only we are showing the items or not.

    const menucategory = menu.filter(function (menuItem) {
      // it returns all the item. more we can do is math with current button ki category and if match then make an array.
      if (menuItem.category === category) {
        return menuItem;
      }

    });

    if (category === "all") {
      displayItems(menu);
    }
    else {
      displayItems(menucategory);
    }

  });
});

}



