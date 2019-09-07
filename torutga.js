import Corredor from "./corredor";

export default class Tortuga extends Corredor {
    constructor(nombre) {
        super(nombre)
        this._posicion = 0;
    }

    get posicion() {
        this._posicion;
    }

    correr() {

        let recorrido = Math.trunc((Math.random() * 100 + 1));
        if (recorrido <= 50) {
            this._posicion += 3;
        } else if (recorrido <= 70) {
            this._posicion -= 3;
        } else if (recorrido <= 100) {
            this._posicion += 1;
        }
        return recorrido;
    }
}