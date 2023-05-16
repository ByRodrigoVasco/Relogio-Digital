const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const inputH = document.getElementById('hr');
const inputM = document.getElementById('min');
const inputS = document.getElementById('sec');
const buttonAtivar = document.getElementById('ativar')
const buttonParar = document.getElementById('parar')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    horas.textContent= hr;
    minutos.textContent= min;
    segundos.textContent= sec





})