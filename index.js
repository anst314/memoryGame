// This is for the div container
const cardsContainer = document.querySelector('cards');
// This is referring to the colors that will be used in the game
// Change the colors to an image later!!!
// Array for colors of the cards!
const cardArray = ["green", "blue", "red", "yellow", "brown", "orange", "purple", "tan"]


const grid = document.querySelector('cardGrid');
// This ...spread operator states array contains 2 of the cardArray colors
const colorsPicklist = [...cardArray, ...cardArray];

console.log(colorsPicklist);

// Generate the board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++);
    const randomIndicies = Math.floor(Math.random() * colorsPicklist.length);
    const cardColor = colorsPicklist[randomIndicies];
}