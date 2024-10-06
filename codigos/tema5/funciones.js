/* // Ejercicio1 del tema 4
let array = [5, 12, 8, 21, 6]
let mayor = 0;
for (let index = 0; index < array.length; index++) {
    if (array[index] > mayor) {
        mayor += array[index];
    }
    
}
console.log(mayor); */



// Funciones
function saludo() {
console.log("Hola estudiantes.");
}

// saludo();


// Paso de parámetros
function saludarConParametros(saludo) {
    console.log(`Hola. ${saludo}`);
}

// saludarConParametros("Marisol");

// Instrucción return
function suma(num1, num2) {
    return num1 + num2;
}

// console.log(suma(5, 7));

// Función que devuelve el resultado de un número al cuadrado
function cuadrado(numero) {
    return numero * numero;
}


/* let miCuadrado = cuadrado(5);
if (miCuadrado === 25) {
    console.log("El resultado de 5 por 5 es 25");
    console.log(miCuadrado);
}

 */
// Uso de let y var
var valores;
function mostrarValores() {
    console.log(valores);
    if (true) {
        var valores = "cadena";
    }
    console.log(valores);
}

mostrarValores();


// Declarando funciones flecha o arrow funtions
miFuncion = () => {

}

damecuadrado = (numero) => numero * numero;


// funciones anóminas
() => {

}

const funcion = function () {
    return;
}



// uso del foreactch
let arreglo = [
    "hola", 5, 12, true
];

arreglo.forEach(function(elemento) {
    console.log(elemento);
});

