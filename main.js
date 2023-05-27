let guessCounter = 0;
const numbers = [];
rndmNumbers();
function rndmNumbers(){
    for(let i = 0;i<5;i++){
        const number = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        numbers.push(number);
    }
    console.log(numbers);
    
}
function guess(){
    guessCounter++;
    let guess = document.getElementById('guess').value;
    guess = guess.replace(/ /g, "");
    verify(numbers,guess,guessCounter);
}
function verify(nums,guess,count){
    let guesses = [];
    let check = new Map();
    let elementCorrect;
    for(let i = 0; i<5;i++){
        guesses[i] = guess[i];
        document.getElementById('r'+count+'box'+i).innerHTML = guesses[i];
        elementCorrect = document.getElementById('r'+count+'box'+i);
        for(let j = 0;j<5;j++){
            if(nums[i]===parseInt(guesses[j])){
                elementCorrect.style.backgroundColor = 'green'; 
            }
            else if(nums.includes(parseInt(guess[i]))){
                elementCorrect.style.backgroundColor = 'yellow';
            } 
            else{
                elementCorrect.style.backgroundColor = 'red'; 
            }
        }
    }
}
function winCheck() {
}