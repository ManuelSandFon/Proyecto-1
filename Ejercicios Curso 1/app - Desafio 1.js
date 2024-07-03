alert('Bienvenido y bienvenida a nuestro web');

let nombre = "Luna";

let Edad = 25;

let numeroDeVentas = 50;

let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos";

let nombreUsuario = prompt("Cual es tu nombre");
console.log(nombreUsuario);
if (nombreUsuario == 0) {
alert(mensajeDeError)
};
let edad = prompt("Digite su edad");
console.log(edad);
if (edad == 0) {
alert(mensajeDeError)
};
if (edad >= 18) {
alert("Puede optener su licencia de conducir");
};