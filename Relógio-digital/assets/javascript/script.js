const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const buttonHabilitar = document.getElementById('habilitar');
const start_button = document.getElementById('start');
const editAlarme = document.getElementById('editarAlarme');
const parar = document.getElementById('parar');
const overlay = document.getElementById("overlay");
const volumeSlider = document.getElementById("volume");
const audio = new Audio();
let horaAlarme = 0;
let minutoAlarme = 0;
audio.src = 'assets/Extreme Alarm.mp3';
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
    segundos.textContent= sec;
    
    if(hr === horaAlarme && min === minutoAlarme){
        horaAlarme = 0
        minutoAlarme = 0
        console.log('tocou!')
        audio.currentTime = 0;
        audio.play();
        fecharJanela();
    }
    audio.volume = volumeSlider.value;
    volumeSlider.addEventListener("input", function () {
        volume = volumeSlider.value;

    })
});

function agendarAlarme () {
    const horas_input = document.getElementById('hour_input').value;
    const minutos_input = document.getElementById('minutes_input').value;
    horaAlarme = parseInt(horas_input);
    minutoAlarme = parseInt(minutos_input);
    parar.style.display = "block";
    fecharJanela();
}

function abrirJanela () {
    editAlarme.style.display = "block";
    overlay.style.display = "block";
}

function fecharJanela() {
    editAlarme.style.display = "none";
    overlay.style.display = "none";
}

function stopAlarme() {
    audio.pause();
    parar.style.display = "none";
}