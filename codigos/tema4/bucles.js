// Uso de bucle for
const ESTUDIANTES = [
    "Juan",
    "María",
    "Pedro",
    "Francisco",
    "Marta"
];
// Uso de bucle for
/* for(let elemento = 0; elemento < ESTUDIANTES.length; elemento++) {
    console.log(`Estudiante: ${elemento}: ${ESTUDIANTES[elemento]}`);
}

 */

// Contando hasta 10
/* for (let index = 1; index <=10 ; index++) {
    console.log(index);
}

 */

// Uso de bucle whyle
let numero = 0;
// Bucle infinito
/* while (numero <=11) {
    console.info("hola mundo");
}
 */

// Bucle finito
while (numero <=11) {
    numero++;
    // Uso de instrucción continue
    if (numero === 5) {
        continue;
    }
    // numero++;
    console.log("Hola mundo" + numero);

    // Uso de instrucción break
/*         if (numero === 0) {
            break;
        }
 */
}


