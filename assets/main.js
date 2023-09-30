
let numbers = document.getElementsByClassName('number');
let numbersLength = numbers.length-1; 
let numberContainer = document.querySelectorAll('.number > div');
let minute = document.querySelector('#minute');
let hour = document.querySelector('#hour');
let second = document.querySelector('#second');
let startSecond = new Date().getSeconds()*6;
let startHour = new Date().getHours()*30;
let startMinute = new Date().getMinutes()*6;


setInterval(increaseSecond, 1000);

function readyHour() {
    //second starting position
    second.style.transform = `rotate(${startSecond}deg)`;
    minute.style.transform = `rotate(${startMinute}deg)`;
    hour.style.transform = `rotate(${startHour}deg)`;
    
    //numbers positions
    for(let i = 0; i <= numbersLength; i++){
        numbers[i].style.transform = `rotate(${i*30}deg)`;
        numberContainer[i].style.transform = `rotate(${-(i*30)}deg)`;
    }
}
readyHour();

function increaseSecond(){
    let currentSecond = new Date().getSeconds();
    let currentMinute = new Date().getMinutes();
    let currentHour = new Date().getHours();

    second.style.transform = `rotate(${currentSecond*6}deg)`;

    
    minute.style.transform = `rotate(${currentMinute*6}deg)`;
    hour.style.transform = `rotate(${currentHour*30}deg)`;
        
    console.log(currentMinute+ " " + currentMinute*6)
}
