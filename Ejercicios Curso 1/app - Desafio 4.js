//Ejercicio 1 Mensaje de Bienvenida
console.log("¡Bienvenido!");

//Ejercicio 2 Bienvenida con Nombre
let nombre = "Manuel";
console.log(`¡Hola ${nombre}!`);

//Ejercicio 3 Alerta con el nombre 
alert(`¡Hola ${nombre}!`);

//Ejercicio 4 pregunta prom y alerta
let programacion = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
let respuesta1 = (programacion);
console.log(respuesta1);

//Ejercicio 5 suma
let valor1 = (1890);
let valor2 = (2535);
let resultado = (valor1) + (valor2);
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//Ejercicio 6 resta
let valor3 = (4890);
let valor4 = (1535);
let resultado2 = (valor3) - (valor4);
console.log(`La diferencia entre ${valor3} y ${valor4} es igual a ${resultado2}`);

//Ejercicio 7 Edad
let edad = prompt("¿Cuál es tu edad?");
let respuestaEdad = (edad);

if (respuestaEdad >= 18) {
    console.log(respuestaEdad);
    console.log("La persona es mayor de edad");
} else {
    console.log("La persona es menor de edad");
}

//Ejercicio 8 verifivar un número
let numero = prompt("Digite un número");
let respuestaNumero = (numero);

if (respuestaNumero == 0) {
    console.log(respuestaNumero);
    alert("Tu Número es cero");   
} else {
    if (respuestaNumero > 0) {
    alert("Tu número es positivo");
        } else {
        alert("Tu número es negativo");
        console.log(alert);
        }
    }

//Ejercicio 9 bucle
let contador = 1

while (contador <=10) {
    alert(contador);
    console.log(contador);
    if (contador !=10) {
        alert("siguiente");
    } else {
        alert("fin");
        }
        contador++ ;
}

//Ejercicio 10 nota
let nota = prompt("Digite la nota del 1 al 10");
let respuestaNota = (nota);
if (nota >= 7) {
    console.log(respuestaNota);
    console.log("Aprovado");
} else {
    console.log("Reprobado");
}

//Ejercicio 11 Cualquier número
let numeroEntero = Math.random();
console.log(numeroEntero);

//Ejercicio 12 del 1 al 10 aleatorio
let aleatorioNatural = Math.floor(Math.random()*10)+1;
console.log(aleatorioNatural);

//Ejercicio 13 del 1 al 1000
let aleatorioNatural2 = Math.floor(Math.random()*1000)+1;
console.log(aleatorioNatural2);


