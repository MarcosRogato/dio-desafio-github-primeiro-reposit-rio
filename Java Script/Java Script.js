/* Desafio Faça um programa para calcular o valor de uma viagem.
Você terá 3 variaveis sendo elas:
1 - Preço do combustivél;
2 - Gasto medio de combustivél do carro por KM;
3 - Distância em Km da viagem;
/*

*/ 
const preçocombustivel = 5.89;
const kmporlitro = 14;
const distância =  1050;

const litrosconsumidos = distância / kmporlitro;
const valorgasto = litrosconsumidos * preçocombustivel;
console.log(valorgasto);






    