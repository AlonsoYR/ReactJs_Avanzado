/**
 * La función suma devuelve la suma de a + b
 * @param {number} a   - El primer número a sumar
 * @param {number} b   - El segundo número a sumar
 * @returns {number} Devuelve la suma de a + b
 */

const suma = (a, b = 5) => a + b;

/**
 * Función para añadir un item nuevo al final de un array
 * 
 * @param {object[]} array - El array inicial
 * @param {object} item - El nuevo item que queremos introducir en el array inicial
 * @returns  {object[]} Devuel un array de objetos
 */

const pushArray = (array, item) => [...array, item]