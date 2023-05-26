let guessCounter = 0;
rndmNumbers();
function rndmNumbers(userGuess,count){
    const numbers = [];
    for(let i = 0;i<5;i++){
        const number = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        numbers.push(number);
    }
    console.log(numbers);
    verify(numbers,userGuess,count);
    
}
function guess(){
    guessCounter++;
    let guess = document.getElementById('guess').value;
    guess = guess.replace(/ /g, "");
    rndmNumbers(guess,guessCounter);
}

function verify(nums,guess,count){
    let guesses = [];
    for(let i = 0; i<5;i++){
        guesses[i] = guess[i];
        document.getElementById('r'+count+'box'+i).innerHTML = guesses[i];
        if(nums[i] === parseInt(guesses[i])){
            const elementCorrect = document.getElementById('r'+count+'box'+i);
            elementCorrect.style.color = "green"; 
        }
        else if(nums[i] === parseInt(guesses[i])){
            const elementCorrect = document.getElementById('r'+count+'box'+i);
            elementCorrect.style.color = "red"; 
        }
    }
}
