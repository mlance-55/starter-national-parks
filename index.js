/*console.log(document);
const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const area = document.querySelector(".area");
console.log(area);

const descendant = document.querySelector(".stat > div");
console.log(descendant);

const greet = document.querySelector(".hello");
console.log(greet);

const buttons = document.querySelectorAll("button");
console.log(buttons);*/



//USING QUERYSELECTORALL TO SELECT NODE LISTS + ITERATE

/*const heading3List = document.querySelectorAll("h3");
for (let element of heading3List.values()) {
    console.log(element);
  }
for (let i = 0; i < heading3List.length; i++) {
    const element = heading3List[i];
    console.log(element);
}*/



//MODIFYING AN ELEMENT

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()){
  let content = desc.innerText;
  
  if (content.length > 250){
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
  desc.innerHTML = content;
}



//CHANGING STYLE OF AN ELEMENT

//selecting all ratings
const ratings = document.querySelectorAll(".rating-display .value");


for (let rating of ratings){
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7){
    rating.style.fontWeight = "bold";
    rating.style.color = "#3ba17c";
  }
}



//CREATING A NEW DOM ELEMENT

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;

//--create new div element with dynamically updating text
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit!`;

//--add styling to new element
newElement.classList.add("header-statement");

//--add element to page
const header = document.querySelector('header');
header.appendChild(newElement);



//REMOVING DOM ELEMENTS (removing first park on the page)

/*
//--getting parent element of all parks
const main = document.querySelector("main");
//--selecting a single park
const park = document.querySelector(".park-display");
//--removing the selected park
main.removeChild(park);
*/



//ADDING EVENT LISTENER TO A BUTTON

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event)
})