// TYPING EFFECT LOOP

const typingText =
document.querySelector(".typing-text");

if(typingText){

const words = [

"Welcome To Foodie Restaurant",

"Best Taste In Town",

"Fresh & Delicious Food"

];

let wordIndex = 0;

let charIndex = 0;

let currentWord = "";

let isDeleting = false;

function typeEffect(){

currentWord = words[wordIndex];

if(isDeleting){

typingText.textContent =
currentWord.substring(0, charIndex--);

}

else{

typingText.textContent =
currentWord.substring(0, charIndex++);

}

if(!isDeleting && charIndex === currentWord.length){

isDeleting = true;

setTimeout(typeEffect, 1000);

return;

}

if(isDeleting && charIndex === 0){

isDeleting = false;

wordIndex++;

if(wordIndex === words.length){

wordIndex = 0;

}

}

setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();

}

// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }

  else{

    navbar.classList.remove("scrolled");

  }

});



// ORDER BUTTONS

const orderButtons = document.querySelectorAll(".menu-card button");

orderButtons.forEach(function(button){

  button.addEventListener("click", function(){

    const successMsg = document.createElement("div");

successMsg.innerText = "✅ Order Added Successfully!";

successMsg.classList.add("success-message");

document.body.appendChild(successMsg);


setTimeout(function(){

  successMsg.remove();

},2000);

  });

});


// HAMBURGER MENU

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


if(menuToggle && navLinks){

  menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

  });

}

// CLOSE MENU WHEN CLICK OUTSIDE

document.addEventListener("click", function(e){

  if(
    !menuToggle.contains(e.target) &&
    !navLinks.contains(e.target)
  ){

    navLinks.classList.remove("active");

  }

});



// DARK LIGHT MODE

const themeBtn = document.getElementById("theme-btn");


if(themeBtn){

  themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

      themeBtn.innerHTML = "☀️";

    }

    else{

      themeBtn.innerHTML = "🌙";

    }

  });

}




// FOOD FILTER

function filterItems(category){

  const cards = document.querySelectorAll(".menu-card");


  cards.forEach(function(card){

    if(category === "all"){

      card.style.display = "block";

    }

    else if(card.classList.contains(category)){

      card.style.display = "block";

    }

    else{

      card.style.display = "none";

    }

  });

}


// FINAL CART SYSTEM

const cartIcon = document.querySelector(".cart-icon");

const cartPopup = document.getElementById("cart-popup");

const cartItems = document.getElementById("cart-items");

const totalPrice = document.getElementById("total-price");

const cartCount = document.getElementById("cart-count");

const orderBtns = document.querySelectorAll(".menu-card button");


let total = 0;

let count = 0;


// OPEN / CLOSE CART

if(cartIcon){

  cartIcon.addEventListener("click", function(){

    cartPopup.classList.toggle("active");

  });

}


// ADD TO CART

orderBtns.forEach(function(btn){

  btn.addEventListener("click", function(){

    const card = btn.parentElement;

    const itemName = card.querySelector("h3").innerText;

    const itemPrice = parseInt(
      card.querySelector("p").innerText.replace("$","")
    );


    // ITEM

    const item = document.createElement("p");

    item.innerText = itemName + " - $" + itemPrice;

    cartItems.appendChild(item);


    // TOTAL

    total += itemPrice;

    totalPrice.innerText = total;


    // COUNT

    count++;

    cartCount.innerText = count;

  });

});



// CHECKOUT FORM

const checkoutBtn = document.querySelector(".checkout-btn");

const checkoutForm = document.getElementById("checkout-form");


if(checkoutBtn && checkoutForm){

  // OPEN FORM

  checkoutBtn.addEventListener("click", function(){

    checkoutForm.classList.toggle("active");

  });

}


// PLACE ORDER
if(checkoutForm){

checkoutForm.addEventListener("submit", function(e){

e.preventDefault();

alert("🎉 Order Placed Successfully!");

checkoutForm.reset();

checkoutForm.classList.remove("active");

});

}

// FINAL LIVE SEARCH

const searchInput = document.getElementById("search-input");

const menuCards = document.querySelectorAll(".menu-card");

if(searchInput){

searchInput.addEventListener("input", function(){

const searchValue =
searchInput.value.toLowerCase();

menuCards.forEach(function(card){

const foodName =
card.querySelector("h3")
.innerText
.toLowerCase();

if(foodName.includes(searchValue)){

card.style.display = "block";

}

else{

card.style.display = "none";

}

});

});

}



// FOOD POPUP

const foodPopup =
document.getElementById("food-popup");

const popupImg =
document.getElementById("popup-img");

const popupTitle =
document.getElementById("popup-title");

const popupPrice =
document.getElementById("popup-price");

const popupDesc =
document.getElementById("popup-desc");


// OPEN POPUP

function openPopup(title, price, img, desc){

foodPopup.style.display = "flex";

setTimeout(function(){

foodPopup.classList.add("show");

},10);

popupImg.src = img;

popupTitle.innerText = title;

popupPrice.innerText = price;

popupDesc.innerText = desc;

}


// CLOSE POPUP
function closePopup(){

foodPopup.classList.remove("show");

setTimeout(function(){

foodPopup.style.display = "none";

},300);

}
// LOADER FADE EFFECT

window.addEventListener("load", function(){

  const loader =
  document.querySelector(".loader");

  loader.style.opacity = "0";

  setTimeout(function(){

    loader.style.display = "none";

  },500);

});

// SCROLL TOP BUTTON

const topBtn =
document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topBtn.style.display = "block";

}

else{

topBtn.style.display = "none";

}

});

topBtn.addEventListener("click", function(){

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

}



// GO TO TOP

topBtn.addEventListener("click", function(){

window.scrollTo({

top: 0,

behavior: "smooth"

});

});



// ACTIVE FILTER BUTTONS

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(function(btn){

btn.addEventListener("click", function(){

filterBtns.forEach(function(b){
b.classList.remove("active");
});

btn.classList.add("active");

});

});


// ACTIVE NAV LINKS

const sections =
document.querySelectorAll("section");

const navLinksAll =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function(){

let current = "";

sections.forEach(function(section){

const sectionTop = section.offsetTop;

if(window.scrollY >= sectionTop - 150){

current = section.getAttribute("id");

}

});

navLinksAll.forEach(function(link){

link.classList.remove("active");

if(
link.getAttribute("href")
.includes(current)
){

link.classList.add("active");

}

});

});




// AUTO SLIDE GALLERY

const gallery =
document.querySelector(".food-gallery");

if(gallery){

let scrollAmount = 0;

setInterval(function(){

scrollAmount += 320;

if(scrollAmount >= gallery.scrollWidth - gallery.clientWidth){

scrollAmount = 0;

}

gallery.scrollTo({

left: scrollAmount,

behavior: "smooth"

});

}, 2500);

}


// AUTO CLOSE MOBILE MENU

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item){

  item.addEventListener("click", function(){

    navLinks.classList.remove("active");

  });

});




// SCROLL REVEAL

function revealElements(){

  const reveals =
  document.querySelectorAll(".reveal");

  reveals.forEach(function(element){

    const windowHeight =
    window.innerHeight;

    const revealTop =
    element.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();
