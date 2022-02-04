/**Funciones declarativas */
function miFuncion(){ //Js infiere el tipo de valor de retorno
    return 3;
}
miFuncion();
/**Funciones de expresion  tambien conocidad como anonimas se guarda el valorde toda la funcion
 * en una variable
*/
var miFuncion = function(a,b) {
    return a+b;   
}
miFuncion();

/** */

function saludo(estudiante) {
    console.log(estudiante)
}

function saludo(estudiante) {
    console.log(`Hola a mis fans ${estudiante}`) /*Esa comilla rara se hace con alt+96* */
}
saludo("Juan")
/**Resultado: Hola a mis fans Juan  */

function sumar(a,b) {
    var resultado = a+b;
    return resultado;
}
//Resultado: suma de dos numeros


