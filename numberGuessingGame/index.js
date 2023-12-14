const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert(`Please enter a valid number`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Number out of range!`);
    }
    else{
        attempts++;
        if(guess === answer){
            window.alert(`That's correct! It took you ${attempts} tries!`);
            running = false;
        }
        else if(guess < answer){
            window.alert(`Try a greater number...`);
        }
        else{
            window.alert(`Try a smaller number...`)
        }
    }

    
}
