var a = 4 + "7";
typeof a; /*String */
/**Lo que esta ocurriendo es que esta conviertiendo esto a un string, el + con dos valores 
 * diferentes siempre va a generar comncatenacion */
var b = 4*"7";
typeof b;/**Number */


/**EXPLICITA */
var a = 20;
var b = a+"";

var c = String(a);
typeof c; /**String */

var d = Number(c);
typeof d; /**Number */