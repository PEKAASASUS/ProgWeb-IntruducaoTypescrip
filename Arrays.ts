//* Arrays e métodos de manipulações

let notas: number[] = [56,83,87,78];
let num: number = 0;
//forEach

notas.forEach(n => console.log("Nota do bimestre ", num + 1 , " ", n))  //TODO usado para percorrer a lista

//!map

//TODO Cria um novo array com oso resultados da chamada de uma função fornecida
let notasAjustadas = notas.map(n => n + 5);

//! 1filter
let aprovados = notas.filter(n => n >= 60);

//! Push
notas.push(10); //TODO adiciona um novo elemento no final do array;
notas.pop(); //TODO remove do final do array;



