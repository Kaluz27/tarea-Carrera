import Tortuga from './torutga.js';
import Liebre from './liebre.js';

class Main{
    constructor(){
        document.getElementById('btn').addEventListener('click',()=>{ 
            let tortuga = new Tortuga("pedro");
            let liebre = new Liebre("eduardo")

            while(tortuga._posicion <= 90 && liebre._posicion <= 90){
                tortuga.correr();
                liebre.correr();
                console.log(`Liebre: ${liebre1.posicion}  tortuga: ${tortuga1.posicion}`);
            }

            if(tortuga._posicion >= 90 && liebre._posicion >= 90){
                console.log(`La tortuga:  ${tortuga.nombre} y la liebre: ${liebre.nombre} quedaron empatadas`);
            } else if(tortuga._posicion >= 90){
                console.log(`La tortuga: ${tortuga.nombre} gano esta competencia`);
            } else if(liebre._posicion >= 90){
                console.log(`La liebre: ${liebre.nombre} gano esta competencia`);
            }
        })
    }
}

let m = new Main();