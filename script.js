//your code here
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
} 

let btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    let response = document.getElementById('respond');

    let randomNumber = getRandomNumber(-20, 20);
    let num = document.getElementById('num');
    num.innerText = randomNumber;

    let userGuess = document.getElementById('guess');
    
    let difference = Math.abs(userGuess.value - randomNumber);

    if(difference >= 0 && difference <= 3){
        response.innerText = "HOT";
    }
    else{
        response.innerText = "COLD";
    }
    
})

