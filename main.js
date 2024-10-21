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
}