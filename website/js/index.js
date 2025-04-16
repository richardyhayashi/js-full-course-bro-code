// NUMBER GUESSING GAME

const MINIMUM = 1;
const MAXIMUM = 100;
const answer = Math.floor(Math.random() * (MAXIMUM - MINIMUM + 1)) + MINIMUM;

let attempts = 0;
let running = true;
let guess;

while (running) {
   guess = window.prompt(`Guess a number between ${MINIMUM} - ${MAXIMUM}`);
   guess = Number(guess);

   if (isNaN(guess)) {
      window.alert("Please enter a valid number");
      continue;
   } else if (guess < MINIMUM || guess > MAXIMUM) {
      window.alert('Please enter a valid number');
      continue;
   }

   attempts++;
   if (guess < answer) {
      window.alert('TOO LOW! TRY AGAIN!');
   } else if (guess > answer) {
      window.alert('TOO HIGH! TRY AGAIN!');
   } else {
      window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
      running = false;
   }
}