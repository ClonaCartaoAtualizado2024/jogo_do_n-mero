 let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const palpites = document.querySelector('.palpites');
    const ultimoResultado = document.querySelector('.ultimoResultado');
    const baixoOuAlto = document.querySelector('.baixoOuAlto');
    const envioPalpite = document.querySelector('.envioPalpite');
    const campoPalpite = document.querySelector('.campoPalpite');
    let contagemPalpites = 1;
    let botaoReiniciar;

function verificarPalpite() {
   const palpiteUsuario = Number (campoPalpite.value);
   if (contagemPalpites === 1) {
      palpites.textContent = "palpites anteriores: ";
   }

palpites.textContent += palpiteUsuario + " ";

   if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = "boa man, fez o minimo"
      ultimoResultado.style.backgroundColor = "green";
      baixoOuAlto.textContent = "";
      finalizarJogo();
   } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = "cabo manin";
      baixoOuAlto.textContent = "";
      finalizarJogo();
   } else {
      ultimoResultado.textContent = "errado"
      ultimoResultado.style.backgroundColor = "red";
      if (palpiteUsuario < numeroAleatorio) {
         baixoOuAlto.textContent = "Esse palpite ta muito alanna"
      } else if (palpiteUsuario > numeroAleatorio) {
         baixoOuAlto.textContent = "esse palpite ta muito pierre";
      } 
   }

contagemPalpites++;
campoPalpite.value = "";
campoPalpite.focus();
}

envioPalpite.addEventListener('click', verificarPalpite)

function finalizarJogo() {
   campoPalpite.disabled = true;
   envioPalpite.disabled = true;
   botaoReiniciar = document.createElement('button');
   document.body.appendChild(botaoReiniciar);
   botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
   contagemPalpites = 1;
   const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p');{
   for (const paragrafoReiniciar.textContent = "");
}

botaoReiniciar.parentNode.removeChild(botaoReiniciar);
campoPalpite.disabled = false;
envioPalpite.disabled = false;
campoPalpite.value = "";
campoPalpite.focus();
ultimoResultado.style.backgroundColor = 'white';
numeroAleatorio = math.floor (math.random() * 100) + 1;
}