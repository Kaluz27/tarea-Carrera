export default class Corredor {
    constructor(nombre) {
        this._nombre = nombre;
        this._posicion = 0;
    }

    get nombre(){
        return this._nombre;
    }
    get posicion() {
        return this._posicion;
    }
    
    correr(){
        let correr = Math.trunc(Math.random()* 100 + 1);
        return correr;
    }
    }