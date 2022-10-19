function verificarLados() {
  //Cria referência aos elementos da página
  let inLadoA = document.getElementById('inLadoA')
  let inLadoC = document.getElementById('inLadoC')
  let inLadoB = document.getElementById('inLadoB')
  let outResultado = document.getElementById('outResultado')

  //Obtem conteúdos dos campos de entrada
  let ladoA = Number(inLadoA.value)
  let ladoB = Number(inLadoB.value)
  let ladoC = Number(inLadoC.value)

  //Um dos lados não pode ser maior que a soma dos outros dois
  let soma = ladoA + ladoB
  let soma2 = ladoB + ladoC
  let soma3 = ladoA + ladoC

  //Se os três lados forem iguais: equilátero
  if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
    outResultado.textContent = 'Triângulo Equilátero'
  }
  //Se dois lados forem iguais: isóceles
  if((ladoA == ladoB) && (ladoC != ladoA && ladoC != ladoB)) {
    outResultado.textContent = 'Triângulo Isoscéles'
  }
  //Se os três lados forem diferentes: escaleno
  if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
    outResultado.textContent = 'Triângulo Escaleno'
  }
  
  //Se um dos lados for maior que a soma dos outros dois
  if (ladoC > soma || ladoA > soma2 || ladoB > soma3) {
    outResultado.textContent = 'Não é um triângulo!'
  }
}

//Cria referência ao elemento btVerificar e associa function ao evento click
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarLados)






