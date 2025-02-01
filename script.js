let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1


let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        
        validateGuess(guess)

    });
}

function validateGuess(guess){
    //check for num is a real value or not
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a valid number')
    } else if(guess > 100){
        alert('Please enter a number less than hundred')
    } else{
        prevGuess.push(guess)
        if(numGuess >= 10){
            displayGuess(guess)
            displayMessage(`Gmae Over. Random Number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //check if value is eaual to random no, high or low 
    if(guess === randomNumber){
        displayMessage(`You guessed it right Yayy!!`)
        endGame()

    } else if(guess < randomNumber){
        displayMessage(`Number is Tooo  low`)
    } else if(guess > randomNumber){
        displayMessage(`Number is Tooo high`)
    }
}

function displayGuess(guess){
    //clean values, update array, remainig update
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,  `
    numGuess ++;

    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    //dom interaction directly, empty user input value, inner html add guess, reduce numbers (DOM manipulation)
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame"> Start New Game</h2>';
    startOver.appendChild(p)
    playGame = false;
    newGame();

}

function newGame(){
    //
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}

