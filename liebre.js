import Corredor from "./corredor";

export default class Liebre extends Corredor {
    constructor(nombre) {
  super(nombre);
    this._posicion = 0;
    }

    get posicion(){
        return this._posicion;
    }

    correr() {
        let recorrido = Math.trunc((Math.random() * 100 + 1));
        if (recorrido <= 20) { //Cuando la liebre esta durmiendo
            return this._posicion;
        } else if (recorrido<= 40) {//CUando se da un salto grande
            this._posicion += 9;
        } else if (recorrido <= 50) {//Resbalon grande
            this._posicion -= 12;
        } else if (recorrido <= 85) {//Salto pequeño
            this._posicion += 1;
        } else if (recorrido<= 100) {//Respbalon Pequeño
            this._posicion -= 2;
        }
        return recorrido;

    }
}