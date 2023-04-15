function validatesTheGuess (guess, secretNumber) {

    const guessValid = +guess;
   
    if (Number.isNaN(guessValid)) {
            
        guessDiv.innerHTML = `<h3 class="italic mx-2">I couldn't understand your guess :( </br> Can you say it again?<h3>`

        return;
    } 
    
    if(guessValid > 1000 || guessValid < 10) {

        guessDiv.innerHTML = `
            <h3 class="text-SpecialWhite font-bold mb-8">You said:</h3> 

            <span class="bg-DarkBlue border rounded p-2">${guessValid}</span> 
            
            <h3 class="font-bold italic text-LightGreen mt-6 mx-4">Remember: The secret number is between ${smallestNumber} and ${biggestNumber}</h3>`;

        return;
    }

    if(guessValid === secretNumber) {

        document.body.innerHTML = `
            <h1 class="font-bold mb-20 text-4xl sm:text-6xl">Congratulations!</h1> 

            <h3 class="font-bold mx-12 mb-12 text-2xl w-64 sm:text-3xl w-128">The secret number was <span class="text-DarkBlue">${secretNumber}</span></h3> 

            <input type="button" class="bg-SpecialWhite rounded text-DarkBlue font-semibold cursor-pointer text-xl p-2 m-8 hover:bg-DarkBlue hover:text-SpecialWhite" value="Play again" onclick=window.location.reload()>`

    } else if (guessValid < secretNumber) {

        guessDiv.innerHTML = `
            <h3 class="text-SpecialWhite font-bold mb-8">You said:</h3> 

            <span class="bg-DarkBlue border rounded p-2">${guessValid}</span> 

            <h3 class="font-bold text-LightGreen mt-6 mx-4">Hint: the secret number is bigger <i class="fa-solid fa-arrow-up-long fa-bounce"></i></h3>`

    } else {

        guessDiv.innerHTML = `
            <h3 class="text-SpecialWhite font-bold mb-8">You said:</h3> 

            <span class="border rounded bg-DarkBlue p-2">${guessValid}</span> 

            <h3 class="font-bold text-LightGreen mt-6 mx-4">Hint: the secret number is smaller <i class="fa-solid fa-arrow-down-long fa-bounce"></i></h3>`

    }
};
