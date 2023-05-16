const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const buttonHabilitar = document.getElementById('habilitar');
const start_button = document.getElementById('start');
const horas_input = document.getElementsByClassName('h');
const minutes_input = document.getElementsByClassName('m');
const audio = new Audio();


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
})


start_button.addEventListener("click", () => {
    const horaInputValue = horas_input[0].value;
    const minutoInputValue = minutes_input[0].value;
    if (hr === horaInputValue && min === minutoInputValue) {
        audio.src = 'assets/Extreme Alarm.mp3';
        audio.play();
    }

})

function abrirJanela () {
    const editAlarme = document.getElementById('editarAlarme');
    const overlay = document.getElementById("overlay");
    editAlarme.style.display = "block";
    overlay.style.display = "block";
}

function fecharJanela() {
    const editAlarme = document.getElementById('editarAlarme');
    const overlay = document.getElementById("overlay");
    editAlarme.style.display = "none";
    overlay.style.display = "none";
}


function stopAlarme() {
    audio.stop();
}