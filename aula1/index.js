// Orientação a Objetos

var carro = {
    prop: 1,

    ligar: () => {

    }
}

// O que é Classe e o que é objeto?

class Carroclass {
    constructor() {

    }
}

new Carroclass();

// Stateless

const somar = (x, y) => x + y;

//Fibonacci = antepenúltimo + último
const calcularFibonacci = (contador) => {
    let resultado = [0, 1]

    for (let i = 2; i < contador; i++) {
        const valorSomado = somar(resultado[i - 2], resultado [i -1])

        resultado.push(valorSomado)
    }

    return resultado
}

console.log(calcularFibonacci(10))

//Refatorando
//Fibonacci = antepenúltimo + último
const calcularValorFibonacci = (posicao) => {
    if(posicao < 1) {
        return 0
    } else if(posicao <= 2) {
        return 1
    } else {
        return calcularValorFibonacci(posicao - 2) + calcularValorFibonacci(posicao - 1)
    }
}

console.log(calcularValorFibonacci(10));

const obterSequenciaFibonacci = (contagem) => {
    return [...Array(contagem)].map((valor, index) => calcularValorFibonacci(index))
}

console.log(obterSequenciaFibonacci(10));

/**
 * Funções Puras - não podem depender de ninguém, só dela mesmo
 */
//Impura
const trabalharComPI = (lado) => Math.PI * lado * lado // depende do Math.PI que pode ser alterado e alterar o resultado da função

//Pura
const trabalharComPI2 = (pi, lado) => pi * lado * lado // recebe o valor de PI como parâmetro

// Composição de função
[1, 2, 3, 4, 5]
    .filter(o => o != 2)
    .map(o => o +1);

console.log([1, 2, 3, 4, 5]
    .filter(o => o != 2)
    .map(o => o +1))

//RECURSIVIDADE

//Fatorial: Ele * ele - 1
const fatorial = (numero) => {
    if (numero == 0 || numero == 1){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

// fatorial ternário
const fatorial2 = (numero) =>
    (numero == 0 || numero == 1) ? 1
    :numero * fatorial(numero - 1)

/**
 * fatorial (4)
 * 4 * fatorial (3) [6] = 24
 * 3 * fatorial (2) [2] = 6
 * 2 * fatorial (1) [1] = 2
 * 1
 * 
 * 1
 * 2 * 1 = 2
 * 3 * 2 = 6
 * 6 * 4 = 24
 */

/**
 *  Estado compartilhado, nada mais é que uma variável global
 */

console.log(fatorial2(4))

const PI = 3.14;

const somarPI = () => 3.14 * PI

/**
 *  Função de PRIMEIRA CLASSE
 * 
 * Serem atribuidas a variáveis
 * Podem ser passadas como parametro
 * Podem ser retornadas como resultado
 */

// Serem atribuidas a variáveis
const primeiraComArrow = () => {}
const primeiraComFunction = function () {
    return primeiraComArrow
}

primeiraComArrow();
primeiraComFunction();

// Podem ser passadas por parametro
function obterNomeUsuario() {
    return 'Gabriel';
}

function olaUsuario(funcaoNome) {
    console.log(`Olá ${funcaoNome}`);
}

olaUsuario(obterNomeUsuario);

//Podem ser retornadas como resultado
function obterMensagem () {
    return olaUsuario;
}

function obterMensagem2 () {
    return () => console.log("Oi")
}

let ola = obterMensagem()
ola()

let ola2 = obterMensagem2()
ola2()

/**
 *  Função de alta ordem
 * 
 * Podem receber outras funções como argumentos
 * Podem retornar funções
 */

 // Podem receber outras funções como argumentos

 function olaUsuario2(funcaoObterNome) {
    console.log(`Olá ${funcaoObterNome()}`);
}

olaUsuario2(function () {
    return 'Alta Ordem'
});

// Podem retornar funções
function obterMensagemAltaOrdem () {
    return () => 'olá';
}