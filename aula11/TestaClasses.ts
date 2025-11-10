import { Atleta } from "./Atleta"
import { Ciclista } from "./Ciclista"
import { Nadador } from "./Nadador"

export function main() {

    // OBEJETO DA CLASSE NADADOR
    const nadador: Nadador = new Nadador('Thompson')
    const ciclista: Ciclista = new Ciclista('Israel')


    // INSTANCIAR A CLASSE ATLETA
    //const atleta: atleta = new Atleta("Natalia")

    nadador.aquecer()
    nadador.nadar()
    nadador.visualizar()
    console.log("")
    ciclista.aquecer()
    ciclista.pedalar()
    ciclista.visualizar()

}

main()