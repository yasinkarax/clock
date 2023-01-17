
let numbers = document.getElementsByClassName('number');
let numbersL = numbers.length;
let numberContainer = document.querySelectorAll('.number > div');

for(let i = 0; i <= numbersL; i++){
    numbers[i].style.transform = `rotate(${i*30}deg)`; //
    numberContainer[i].style.transform = `rotate(${360 - (i*30)}deg)`;
}
