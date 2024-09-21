// Uso del condicional if
let edad = 35;
let nombre = "Juan";
let dni = false;

// Sintaxis del condicional
/* if(edad < 18) {
    console.log(`${nombre} tiene ${edad} y no puede entrar al club.`);
}
else {
    console.log(`${nombre} puede entrar al club porque tiene ${edad}`);
}


 */

// Viendo las condicionales con operadores lógicos
// Operador lógico y además
/* if (edad >= 18 && dni === true) {
    console.log("Puede pasar");
} else {
    console.log("No puede pasar");
}
 */

// Operador or
/* if (edad >= 18 || dni === true) {
    console.log("Se cumple el operador o");
} else {
    console.log("No se cumple el operador or");
}
 */


// console.log(dni);

// Operador de negación
// dni = !dni;

// console.log(dni);


// Condicionales anidadas
if (edad <= 18 && edad >= 30) {
    console.log("Es joven");
}
else if (edad >= 31 && edad <=60) {
    console.log("Es maduro o madura");
}
else if (edad >=61 && edad <=100) {
    console.log("Es tiempo de juvilarse");
}
else if (edad < 18 && edad > 0) {
    console.log("Es menor");
}
else {
    console.log("Edad fuera de rango");
}



// Investigar switch case
