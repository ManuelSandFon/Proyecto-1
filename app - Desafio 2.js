//Ejercicio 1 Días de la semana
let diaDeSemana = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo");
let diaDeUsuario = prompt("Que día es hoy?");
console.log(diaDeUsuario);
if (diaDeUsuario === "Sábado") {
    alert("Buen fin de Semana")
}
else if (diaDeUsuario === "Domingo") {
    alert("Buen fin de Semana")
}
else {
    alert("Buena Semana")
}

//Ejercicio 2 revisando si un númeo es negatio o positivo
let numeroDeUsuaro = prompt("Ingresa un número");
console.log(numeroDeUsuaro);
if (numeroDeUsuaro > 0) {
    alert("Tu número es positivo")
}
else if (numeroDeUsuaro < 0) {
        alert("Tu número es negativo")
}
else {
    alert("Tu número es cero")
}

//Ejercicio 3 Sistema de Puntuación
let puntuacionDeUsuario = prompt("Deja tu puntuación")
console.log(puntuacionDeUsuario)
if (puntuacionDeUsuario >= 100) {
    alert("¡Enhorabuena, has ganado!")
}
else {
    alert("Inténtalo de nuevo para ganar.")
}

//Ejercicio 4 Informe de Saldo
let saldoAnterior = "$800"
let saldoActual = "$1000"
let ganancia = "$200"
alert(`"Su saldo anterior es de ${saldoAnterior}, Su saldo actual es de ${saldoActual} y su ganencia este mes es de ${ganancia}"`)

//Ejercicio 5 Bienvenida al usuario
let nombreDeUsuario = prompt("Ingrese su nombre aquí")
let mensajeDeError = "¡Error! Completa todos los campos"
if (nombreDeUsuario == 0) {
    alert(mensajeDeError)
};
alert(`"Bienvenido al sitio web ${nombreDeUsuario}"`)
