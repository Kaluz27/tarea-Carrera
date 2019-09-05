import Corredor from "./corredor";

export default class Liebre {
    constructor() {
    this._corredor = new Corredor();
    this._posicion = 0;
    }
    avanzaLiebre() {
        if (this._corredor.correr() <= 20) {
            return this._posicion;
        } else if (this._corredor.correr() <= 40) {
            this._posicion += 9;
        } else if (this._corredor.correr() <= 50) {
            this._posicion -= 12;
        } else if (this._corredor.correr() <= 85) {
            this._posicion += 1;
        } else if (this._corredor.correr() <= 100) {
            this._posicion -= 2;
        }
        return this._corredor.correr();

    }
}