let guessCounter = 0;
rndmNumbers();
function rndmNumbers(){
    const numbers = [];
    for(let i = 0;i<5;i++){
        const number = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        numbers.push(number);
    }
    console.log(numbers);
    guess(numbers);
}
function guess(nums){
    guessCounter++;
    let guesses = [];
    let guess = document.getElementById('guess').value;
    guess = guess.replace(/ /g, "");
    if(guess!=null){
        for(let i = 0; i<guess.length;i++){
            guesses[i] = guess[i];
            document.getElementById('r'+guessCounter+'box'+i).innerHTML = guesses[i];
            if(nums[i] === parseInt(guesses[i])){
                const elementCorrect = document.getElementById('r'+guessCounter+'box'+i);
                elementCorrect.style.color = "green"; 
            }
            else if(nums[i] === parseInt(guesses[i])){
                const elementCorrect = document.getElementById('r'+guessCounter+'box'+i);
                elementCorrect.style.color = "red"; 
            }
        }
    }
}
