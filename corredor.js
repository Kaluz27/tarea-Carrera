export default class Corredor {
    constructor(nombre) {
        this._nombre = nombre;
        this._posicion = 0;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
    
    }