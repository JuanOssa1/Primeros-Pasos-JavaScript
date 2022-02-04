if(true){
    console.log("Hola");
} else {
    console.log("Soy falso");
}
if(true){
    console.log("Hola");
} else if(a) {
    console.log("Soy falso");
} else {

}

var edad = 18;
if(edad===18) {
    console.log("No venda el voto primiparo");
} else if(edad > 18){
    console.log("Ah sahit here we go again");
} else {
    console.log("Tas chikito");
}

/**ABREVIATURA */
condition ? true: false;

var numero = 1;
var resultado = numero === 1 ? "Soy 1" : "No soy 1"



miFuncion(jugador1,jugador2);

function miFuncion(jugador1,jugador2){ 
    if(jugador1===1 && jugador2===2){
        console.log("Gano Jugador2 con papel");
    } else if(jugador1===1 && jugador2===3){
        console.log("Gano jugador1 piedra");
    } else if(jugador1===1 && jugador2===1){
        console.log("Empate");
    }else if(jugador1===2 && jugador2===2){
        console.log("Empate");
    }else if(jugador1===3 && jugador2===3){
        console.log("Empate");
    } else if(jugador2===1 && jugador1===3){
        console.log("Gano jugador1 piedra");
    } else if(jugador2===2 && jugador1===3){
        console.log("Gano jugador1 tijera");
    } 
    else if(jugador1===2 && jugador2===3){
        console.log("Gano jugador2 tijera");
    } 
}