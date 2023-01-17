
let numbers = document.getElementsByClassName('number');
let numbersLength = numbers.length-1; 
let numberContainer = document.querySelectorAll('.number > div');
let minute = document.querySelector('#minute');
let hour = document.querySelector('#hour');
let second = document.querySelector('#second');
let startSecond = new Date().getSeconds()*6;
let startHour = new Date().getHours()*30;
let startMinute = new Date().getMinutes()*6;


setInterval(increaseHour, 3600000);
setInterval(increaseMinute, 60000);
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
    
    second.style.transform = `rotate(${currentSecond*6}deg)`;
}

function increaseMinute(){
    let currentMinute = new Date().getMinutes();
    
    minute.style.transform = `rotate(${currentMinute*6}deg)`;
     console.log(currentMinute)
}

function increaseHour(){
    let currentHour = new Date().getHours();
    
    hour.style.transform = `rotate(${currentHour*30}deg)`;
}



