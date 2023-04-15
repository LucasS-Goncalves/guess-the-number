const smallestNumber = 10;
const biggestNumber = 1000;

const smallestNumberElement = document.querySelector('#smallest-number');
smallestNumberElement.innerHTML = smallestNumber;

const biggestNumberElement = document.querySelector('#biggest-number');
biggestNumberElement.innerHTML = biggestNumber;
 
const guessDiv = document.querySelector('#guess-div');

const secretNumber = parseInt(randomNumber(smallestNumber, biggestNumber));

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}; 









