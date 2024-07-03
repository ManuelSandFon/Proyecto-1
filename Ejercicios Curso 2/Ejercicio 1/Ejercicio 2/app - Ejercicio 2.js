//Ejercicio 1 "Hola Mundo"
function saludo() {
    console.log("Hola Mundo");
    return
}
saludo()

//Ejercicio 2 Saludar al usuario
function nombreDeUsuario() {  
    let nombre = ("Manu")
    console.log(`¡Hola ${nombre}!`);
    return
}
nombreDeUsuario()

//Ejercicio 3 Solicitar número y devolver el doble
function numeroDoble() {
    let numero = parseInt(8);
    let doble = (numero * 2)
    console.log(`El doble es ${doble}`);
    return
}
numeroDoble()

//Ejercicio 4 Promedio de 3 números
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
let promedio = calcularPromedio(65, 80, 110);
console.log(`El promedio es de ${promedio}`);

//Ejercicio 5 devolver mayor
function numeroMayor(a, b) {
    return a > b ? a : b;
  }
  
  let elNumeroMayor = numeroMayor(70, 75);
  console.log(`El número mayor es ${elNumeroMayor}`);

//Ejercicio 6 Potenciar
function potencia(valor) {
    return valor * valor;
}
let resultado = potencia(12);
console.log(`La potencia del número es ${resultado}`);