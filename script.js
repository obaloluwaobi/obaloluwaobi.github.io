// var countDownDate = new Date("feb24, 2024 20:48:2").getTime();

// //update the count down every 1 seconds
// var x = setInterval(function(){

// //get today times and dates
// var now = new Date().getTime();

// //find the difference between now and the count down date
// var distance = countDownDate - now;

// //time calculation for days,hpurs,min and seconds
// var days = Math.floor(distance/(1000 * 60 * 60 * 24));
// var hours = Math.floor((distance%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
// var minutes = Math.floor((distance%(1000 * 60 * 60 ))/ (1000 * 60));

// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// //display the result in the element with id
// document.getElementById("timer").innerHTML = days + "days " + hours + "hours " + minutes + "min " + seconds + "secs " + "left";

// //if the count down is finished, write some text 
// if (distance < 0){
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "Uhh you are late the challenge is over!!! 😉"
// }
// },1000);


const btn = document.querySelector('button.menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click',()=> {
    menu.classList.toggle('hidden');
});