import Tortuga from './Tortuga.js'
import Liebre from './Liebre.js'

class Main{
    constructor(){
        document.getElementById('btn').addEventListener('click',()=>{ 
            let tortuga = new Tortuga("antonio");
            let liebre = new Liebre("lorenzo");

            while(tortuga._posicion <= 90 && liebre._posicion <= 90){
                tortuga.correrTortuga();
                liebre.avanzaLiebre();
            }

            if(tortuga._posicion >= 90 && liebre._posicion >= 90){
                console.log(`La tortuga:  ${tortuga.nombre} y la liebre: ${leibre.nombre} quedaron empatadas`);
            } else if(tortuga._posicion >= 90){
                console.log(`La tortuga: ${tortuga.nombre} gano esta competencia`);
            } else if(liebre._posicion >= 90){
                console.log(`La liebre: ${liebre.nombre} gano esta competencia`);
            }
        })
    }
}

let m = new Main();