// This is for the div container
const cards = document.querySelectorAll('.card');

// add event handler to all cards
cards.forEach((card) => {
card.addEventListener('click', changeColor)});

const resetBtn = document.getElementById('reset-btn');
let savedCard = null;
let matchedCards = new Set(); 
let timer = null;
let timeLeft = 30; // seconds
let gameRunning = false;
resetGame();

function changeColor(e){
    if (!gameRunning) return;
    const target = e.currentTarget;
    if (savedCard !== null && savedCard === target) return;
    if (matchedCards.has(target)) return;

    target.className = target.className.replace('color-hidden', '');
    if (savedCard === null) {
        savedCard = target;
    } else {
        if (savedCard.className === target.className) {
            matchedCards.add(savedCard);
            matchedCards.add(target);
        } else {
            savedCard.classList.add('color-hidden');
            target.classList.add('color-hidden');
        }
        savedCard = null;
    }
} 

// What to do when the timer runs out
function gameOver() {
    // This cancels the setInterval, so the updateTimer stops getting called
    clearInterval(timer);
    gameRunning = false;
  }
  
  function updateTimer() {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
      document.getElementById('timer').innerHTML = timeLeft;
    else {
      gameOver();
    }
  }
  
  // The button has an on-click event handler that calls this
  function start() {
    if (gameRunning) return;

    // setInterval is a built-in function that will call the given function
    // every N milliseconds (1 second = 1000 ms)
    timer = setInterval(updateTimer, 1000);

    gameRunning = true;
    
    // It will be a whole second before the time changes, so we'll call the update
    // once ourselves
    updateTimer();
  }  

  resetBtn.addEventListener('click', () => {
    resetGame();
  });
 
  function resetGame() {
    timeLeft = 30;
    document.getElementById('timer').innerHTML = timeLeft;
    cards.forEach((card) => {
      if (matchedCards.has(card) ||
          (savedCard != null && savedCard === card)) {
        card.classList.add('color-hidden');
      }
    });
    matchedCards.clear();
    savedCard = null;
  }

  