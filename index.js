// This is for the div container
//const cardsContainer = document.querySelector('cardGrid');
// This is referring to the colors that will be used in the game
// Change the colors to an image later!!!
// Array for colors of the cards

const cards = document.querySelectorAll('.card');
const colorList = [[cardArray], [cardArray]];
const cardCount = colorList.length;

//console.log(car)
cards.forEach((card) => {
card.addEventListener('click', changeColor)});

function changeColor(e){
    const target = element.currentTarget;
    target.className = target.className.replace('color-hidden', '');

} 

