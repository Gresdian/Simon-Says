function generateRandomNumbers(){
    return Math.floor(Math.random()* 100 + 1);
}


function resetDom(){
    document.getElementById('numbers').innerText = 'Inserisci i numeri visualizzati in precedenza';  
}

function getUserNumbers(){
    const user_numbers = [];
    while(user_numbers.length < 5){
        let number = parseInt(prompt('Inserisci i numeri visualizzati prima'));
    
        if(!isNaN(number)){
            user_numbers.push(number);
            console.log(user_numbers);
        }
    }
    
    return user_numbers;
}

function checkGuessedNumber(user_numbers, random_numbers){
    let guessed = [];
    for(let i=0; i<user_numbers.length; i++){

        if(random_numbers.includes(user_numbers[i])){
            guessed.push(user_numbers[i]);
        }
    }

    return guessed;
}

function printResults(array){
    let text;

    if(array.length == 1){
        text = `Numero esatto ${array}`;
    }
    else{
        text = `numeri esatti: ${array.length} ecco quali:${array}`;
    }
    document.getElementById('results').innerText = text;
}

const array_numbers = [];

while(array_numbers.length < 5){
    let num = generateRandomNumbers();
    if(!array_numbers.includes(num)){
        array_numbers.push(num);
    }
}

document.getElementById('numbers').innerHTML = array_numbers;

setTimeout(resetDom, 30000);

setTimeout(function(){
    let user_numbers = getUserNumbers();
    
    let guessed_numbers = checkGuessedNumber(user_numbers, array_numbers);
    printResults(guessed_numbers);
}, 31000);



