import { Transporte } from "./Transporte";

export class Terrestre extends Transporte { // CLASSE FILHA | SUB-CLASSE

    private _numeroRodas: number;
	private _velocidade: number;

    constructor(capacidade: number, _numeroRodas: number, _velocidade: number){
        super(capacidade)  // Referencia ao Método Construtor da Classe Mãe
        // Transport(capacidade)

        this._numeroRodas = _numeroRodas
        this._velocidade = _velocidade
    }

    public get numeroRodas() {
		return this._numeroRodas;
	}

	public set numeroRodas(numeroRodas: number) {
		this._numeroRodas = numeroRodas;
	}

	public get velocidade() {
		return this._velocidade;
	}

	public set velocidade(velocidade: number) {
		this._velocidade = velocidade;
	}

	// SOBRESCRITA DE MÉTODO
	public visualizar(): void {
		super.visualizar();  // SUPER => Super Classe | Transporte.visualizar()


		console.log("Número de rodas: " + this.numeroRodas);
		console.log("Velocidade: " + this.velocidade.toFixed(2));
	}

}