//* === LOOPS ===


//! FOR

for (let i = 0; i < 3; i++) { //TODO: Inicialização; Parada; Incremento.
 console.log(i);
} 

//! WHILE

let j: number = 0;

while (j < 3){
    console.log(j);
    j++;

}

//! DO... WHILE = Faça enquanto 

let y: number = 0;  //TODO: usado para rodar uma vez antes de realmente iniciar o while
do{
console.log(y);
y++;

}while (y < 3);


//! Swit

let valor = 2;

switch (valor) {
  case 1:
    console.log("Valor é 1");
    break;

  case 2:
    console.log("Valor é 2");
    break;

  case 3:
    console.log("Valor é 3");
    break;

  default:
    console.log("Valor não conhecido");
}
