function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}
console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);

  }, 1000)
}

document.addEventListener('click', function (e) {
  const elementoClicado = e.target;

  if (elementoClicado.classList.contains('zerar')) {

    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.classList.remove('iniciado');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }

  if (elementoClicado.classList.contains('iniciar')) {

    relogio.classList.add('iniciado')
    relogio.classList.remove('pausado');

    clearInterval(timer);
    iniciaRelogio();
  }

  if (elementoClicado.classList.contains('pausar')) {

    clearInterval(timer);
    relogio.classList.add('pausado')
    relogio.classList.remove('iniciado');
  }

});
