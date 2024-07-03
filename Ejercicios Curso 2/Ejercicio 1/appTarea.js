//Ejercicio 1
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";
//Ejercicio 2
function clickDeUsuario() {
    console.log("El botón fue clicado");
};
//Ejercicio 3
function preguntaDeUsuario() {
    let ciudad = prompt("Dime una ciudad de Brasil");
    console.log(ciudad);
    alert(`Estuve en ${ciudad} y me acordé de ti`);
};
//Ejercicio 4
function yoAmo() {
    alert("Yo amo JS");
};
//Ejercicio 5
function pedirNumero() {
    let primerNumero = parseInt(prompt("Dame un número"));
    let resultado1 = parseInt(primerNumero);
    let segundoNumero = parseInt(prompt("Dame un segundo número"));
    let resultado2 = parseInt(segundoNumero);
    let resultadoFinal = (resultado1) + (resultado2);
    alert(`La suma de ${primerNumero} y ${segundoNumero}  es de ${(resultadoFinal)}, gracias`);
};