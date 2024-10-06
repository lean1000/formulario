//atividade 1

let num = prompt("Digite um número")
let quadrado = num * num
alert(`O quadrado de ${num} é ${quadrado}`)

//atividade 2

function menorNumero(array) {
    let menor = array[0]
    for (let i = 1; i < array.length; i++) {
      if (array[i] < menor) {
        menor = array[i]
      }
    }
    return menor
  }

//atividade 3

let num = prompt("Digite um número")
let result = 0
let contador = 1
while (contador <= num) {
  result += contador
  contador++
}
alert(`A soma de 1 até ${num} é ${result}`)

// atividade 4

let numeros = prompt("Digite uma lista de números separados por espaço").split(" ").map(Number)
let impares = []
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    impares.push(numeros[i])
  }
}
alert(`Números ímpares: ${impares.join(", ")}`)

//atividadde 5

function segundoMaior(array) {
    let maior = -Infinity
    let segundoMaior = -Infinity
    for (let i = 0; i < array.length; i++) {
      if (array[i] > maior) {
        segundoMaior = maior
        maior = array[i]
      } else if (array[i] > segundoMaior && array[i] != maior) {
        segundoMaior = array[i]
      }
    }
    return segundoMaior
  }
  
// atividade 6

let palavra1 = prompt("Digite a primeira palavra")
let palavra2 = prompt("Digite a segunda palavra")

function ordenarString(str) {
  return str.split("").sort().join("")
}

if (ordenarString(palavra1) === ordenarString(palavra2)) {
  alert(`${palavra1} e ${palavra2} são anagramas`)
} else {
  alert(`${palavra1} e ${palavra2} não são anagramas`)
}

// atividade 7 

let lista = prompt("Digite a lista de compras separada por vírgula").split(",")
lista.sort()
alert(`Lista de compras ordenada: ${lista.join(", ")}`)

// atividade 8

function ordenarStrings(array) {
    return array.join("").split("").sort().join("")
  }

// atividade 9

let num = prompt("Digite um número")
let result = 0
let contador = 1
while (contador <= num) {
  if (contador % 2 !== 0) {
    result += contador
  }
  contador++
}
alert(`A soma dos números ímpares até ${num} é ${result}`)

// atividade 10 

let palavras = prompt("Digite várias palavras separadas por espaço").split(" ")
let maiorPalavra = palavras[0]
for (let i = 1; i < palavras.length; i++) {
  if (palavras[i].length > maiorPalavra.length) {
    maiorPalavra = palavras[i]
  }
}
alert(`A palavra com mais caracteres é: ${maiorPalavra}`)

// atividade 11

function unirArrays(array1, array2) {
    let uniao = array1.concat(array2)
    return [...new Set(uniao)]
  }

// atividade 12 

let num = prompt("Digite um número")
let somaDivisores = 0
let contador = 1

while (contador < num) {
  if (num % contador === 0) {
    somaDivisores += contador
  }
  contador++
}

if (somaDivisores == num) {
  alert(`${num} é um número perfeito`)
} else {
  alert(`${num} não é um número perfeito`)
}
