// DECLARAÇÃO DA FUNÇÃO
export function somar(a: number, b: number): number {
    //Lógica da função
    let resultado: number = a + b // 2 + 2 => resultado = 4

    return resultado
}

export function logar(usuario: number | string): void{ // | => Pipe / || pare com o ou  tradução é cano

    if (typeof(usuario) === "number" ) // typeof retorna a tipagem da variavel
        console.log("\nVocê está acessando o Insta pelo Celular");
    else
        console.log("\nVocê está acessando o Insta pelo Celular");
}

/*
= : atribuição
== : igualdade => 5  "5" => O valor é igual e o tipo diferente
=== : identico => 5   5  => Mesmo valor e mesmo tipo
 */

export function transformarNumeroEmExtenso(valor: number): string {
    let texto: string

    if (valor === 5){
        texto = "Valor digitado é cinco"
    } else {
        texto = "Você digitou um número diferente de cinco"
    }

    return texto
}


// CHAMADA DAS FUNÇÕES
let valor: number = somar(7, 12)
let valor1: number = somar(6, 11)

let login: string | number = ("roberta@generation")

console.log("O resultado da sua adição é: " + valor)
console.log("O resultado da sua adição é: " + valor1)

logar(login)

let numeroEmTexto: string = transformarNumeroEmExtenso(6)
console.log(numeroEmTexto)
