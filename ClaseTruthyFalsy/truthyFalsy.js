//VALORES QUE RETORNAN FALSO//
Boolean(); /**Por defecto es falso */
Boolean(0); /**Es un valor falso si es mayor a 0 es verdadero*/
Boolean(null);/**Retorna un valor a 0 */
Boolean(NaN);/**Retorna Falso */
Boolean(undefined)/**Retorna un falso */
Boolean(false)/**Retorna False duuh */
Boolean("");/**String vacio retorna falso */
//VALORES QUE RETORNAN VERDADERO//
Boolean("a")/**Es verdadero si tiene al menos un caracter */
Boolean(1)/**Valor mayor a 0 retorna verdadero*/
Boolean([]);/**Un arreglo aunque este vacio retorna verdadero */
Boolean({});/**Un objeto aunque este vacio tambien retorna verdadero */
Boolean(function(){});/**Una funcion siempre sera verdadera */

