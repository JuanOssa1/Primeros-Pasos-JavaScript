var numero = 1;

switch (true) {
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No soy nada");
}


/**
 *  1 Piedra 
    2 Papel 
    3 Tijera 
 * 
 * 
 */


function miFuncion(jugardor1, jugador2) {
    switch(true) {
        case jugador1===1 && jugador2===2:
            console.log("Gano jugador 2 con papel");    
            break;
        case jugador2===1 && jugador1===2:
            console.log("Gano jugador 1 con papel");    
            break;
        case jugador1===1 && jugador2===3:
            console.log("Gano jugador 1 con piedra");  
            console.log("Soy uno!");    
            break;
        case jugador2===1 && jugador1===3:
            console.log("Gano jugador 2 con piedra");  
            console.log("Soy uno!");    
            break;
        case jugador1===2 && jugador2===3:
            console.log("Gano jugador 2 con tijera");    
            break;
        case jugador2===2 && jugador1===3:
            console.log("Gano jugador 1 con tijera");    
            break;
    default:
        console.log("Empate");
    }
}