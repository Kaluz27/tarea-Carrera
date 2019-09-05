import Corredor from "./corredor";

export default class Tortuga{
    constructor(){
        this._corredor = new Corredor();
        this._posicion = 0;
    }

  correrTortuga(){

        if(this._corredor.correr() <= 50){
            this._posicion += 3;
        }else if(this._corredor.correr() <= 70){
            this._posicion -= 3;
        }else if(this._corredor.correr() <= 100){
            this._posicion += 1;
        }
        return this._corredor.correr();
    }
}