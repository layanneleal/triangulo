function verificarLados() {
  //Cria referência aos elementos da página
  let inLadoA = document.getElementById('inLadoA')
  let inLadoC = document.getElementById('inLadoC')
  let inLadoB = document.getElementById('inLadoB')
  let outResultado = document.getElementById('outResultado')
  let soma = 0
  let soma2 = 0
  let soma3 = 0
  //Obtem conteúdos dos campos de entrada
  let ladoA = Number(inLadoA.value)
  let ladoB = Number(inLadoB.value)
  let ladoC = Number(inLadoC.value)

  //Um dos lados não pode ser maior que a soma dos outros dois
   soma = ladoA + ladoB
   soma2 = ladoB + ladoC
   soma3 = ladoA + ladoC

  if(ladoA < soma2 && ladoB < soma3 && ladoC < soma) {
    if (ladoA == ladoB && ladoB == ladoC) {
      outResultado.textContent = 'Triângulo Equilátero'

    }else if (ladoA == ladoB || ladoA == ladoC || ladoC == ladoB) {
      outResultado.textContent = 'Triângulo Isósceles'
      
    }else{
      outResultado.textContent = 'Triângulo Escaleno'
    }
  }else{
    outResultado.textContent = 'Informe as medidas corretas'
  }
}
//Cria referência ao elemento btVerificar e associa function ao evento click
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarLados)






