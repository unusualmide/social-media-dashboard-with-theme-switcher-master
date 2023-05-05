const toogleOff = document.querySelector('.toogle-off');
const toogleOn = document.querySelector('.toogle-on');
const mode = document.querySelector('.mode');
const body = document.querySelector('body');
const cardBackground = document.querySelectorAll('.card-background');
const headingFour = document.querySelectorAll('h4');
const links = document.querySelectorAll('a');
const desaturated = document.querySelectorAll('.desaturated');
const parah = document.querySelectorAll('.parah');
const pattern = document.querySelector('.pattern');


const on = function () {
    
    toogleOff.classList.toggle('hidden');
    toogleOn.classList.toggle('hidden');
    mode.textContent = 'Dark Mode';
    body.style.backgroundColor = '#1e202a';
    pattern.style.backgroundColor ='#1f212e';


    cardBackground.forEach(function (e) {
        e.style.backgroundColor ='#252a41';

    });

    headingFour.forEach(function (e) {
        e.style.color = 'white';
    });
 
    links.forEach(function (e) {
        e.style.color = '#8b97c6';
    });

    desaturated.forEach(function (e) {
        e.style.color = '#8b97c6'; 
    });

    parah.forEach(function (e) {
        e.style.color = 'white';
    });
}


const off = function () {

    toogleOn.classList.toggle('hidden');
    toogleOff.classList.toggle('hidden');
    mode.textContent = 'Light Mode';
    body.style.backgroundColor = 'white';
    pattern.style.backgroundColor = '#f5f7ff';
    cardBackground.forEach(function (e) {
        e.style.backgroundColor ='#f0f2fa';
    
    });

    headingFour.forEach(function (e) {
        e.style.color = 'black';
    });

    links.forEach(function (e) {
        e.style.color = '#63687e';
    });

    desaturated.forEach(function (e) {
        e.style.color = '#63687e';
    });

    
    parah.forEach(function (e) {
        e.style.color = 'black';
    }) 
}


toogleOn.addEventListener('click', on);

toogleOff.addEventListener('click', off);
