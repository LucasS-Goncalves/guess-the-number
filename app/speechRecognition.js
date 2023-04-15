window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    
const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    
    recognition.addEventListener('result', (e) => {   
        const guess = e.results[0][0].transcript;
        validatesTheGuess(guess, secretNumber)
        });
    
    recognition.addEventListener('end', () => {
        recognition.start();
    })




