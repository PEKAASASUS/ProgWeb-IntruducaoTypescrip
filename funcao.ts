// * === funções ===

//! Function traditional

function saudacao(nome: string): string{
    return `Olá, ${nome}`;
}


//! Aroow function
//todo para apenas um objeto

const soma = (x: number, y: number): number => x + y;
console.log("Soma = ", soma(2,6));


//! Functions value default

function mensagem(texto: string = "Bem-vindo(a)"){
    console.log(texto);
}

//! Optional function
function apresentar(nome?: string){  //TODO usado para uma função que pode ou não passar o item.
    if (nome){
        console.log(`Olá, ${nome}`);
    }
    else {
        console.log("Olá, visitante.");
    }
}

