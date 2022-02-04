var frutas = ["banano", "manzana", "pera", "Fresa"];

//**METODOS QUE AYUDAN A MUTAR EL CONTENIDO */
var masFrutas = frutas.push("Uvas"); /*Añade elementos al final del array en 
este caso despues de fresa pondria uvas*/
//NO ES NECESARIO METER ALGO DENTRO DEL POP EL OPUSH EL SSHIFT Y TODO ESO
var ultimo = frutas.pop(); /**Elimina el ultimo elemento del 
array como si fuera una pila */
var frutaComienzo = frutas.unshift("Mango"); /**Agrega un elemento al inicio */
var frutaComienzo = frutas.shift();/**Elimina el primer elemto del array */

var posicion = frutas.indexOf("pera"); /**Eso me dira en que poscion esta un elemen to del arreglo */



console.log(frutas); /**Retorna el array de frutas */
console.log(frutas.length);/**Retorna la cantidad de elementos en el array */
console.log(frutas[0]);/**Retorna el primer elemento de la lista en este caso banano */


