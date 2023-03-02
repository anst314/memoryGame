// This is for the div container
const cards = document.querySelectorAll('.card');

// add event handler to all cards
cards.forEach((card) => {
card.addEventListener('click', changeColor)});

var timer; 
var timeLeft = 60; // seconds
let savedCard = null;
let matchedCards = new Set(); 

function changeColor(e){
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
            setTimeout(() => {
                
            }, 2000);

            savedCard.classList.add('color-hidden');
            target.classList.add('color-hidden');
        }
        savedCard = null;
    }

} 
 

// What to do when the timer runs out
function gameOver() {
    // This cancels the setInterval, so the updateTimer stops getting called
    cancelInterval(timer);
    
    // re-show the button, so they can start it again
    $('#playAgainButton').show();
  }
  
  function updateTimer() {
    timeLeft = timeLeft - 1;
    if(timeLeft >= 0)
      $('#timer').html(timeLeft);
    else {
      gameOver();
    }
  }
  
  // The button has an on-click event handler that calls this
  function start() {
    // setInterval is a built-in function that will call the given function
    // every N milliseconds (1 second = 1000 ms)
    timer = setInterval(updateTimer, 1000);
    
    // It will be a whole second before the time changes, so we'll call the update
    // once ourselves
    updateTimer();
    
    // We don't want the to be able to restart the timer while it is running,
    // so hide the button.
     $('#playAgainButton').hide();

  }