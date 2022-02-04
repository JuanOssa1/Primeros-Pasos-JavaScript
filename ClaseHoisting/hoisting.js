/**Tenemos dos estados para usar la variable  */


/**
 * En hoisting a veces llamamos variables que no hemos declarado por ejemplo
*/
console.log(miNombre);/*Imprime en consola*/
var miNombre = "Juan";

/**Me da un undefined porque no he creado esa variable Js adentro hace esto
 * var miNombre = undefined;
 * console.log(miNombre);
 */

/**HOISTING DE VARIABLES */
var miNombre = undefined;
console.log(miNombre + "Soy ese hoisting");
miNombre="Juan";
/**HOISTING DE FUNCIONES */


hey();
function hey() {
    console.log("Hola" + miNombre);
}
var miNombre = "Juan";