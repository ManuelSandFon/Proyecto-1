//Ejercicio 1 Contador de 1 a 10
alert("A continuación veremos un contador");
let pregunta = prompt("Deseas verlo")
let contador = 1


while (contador <=10) {
    alert(contador)
    console.log(contador)  
    if (contador > 10) {
        alert("Gracias por verlo");
    } else {
        alert("Siguiente");
        } 
        contador++
}

//Ejercicio 2 Contador de 10 a 1
alert("A continuación veremos un Temporizador");
let pregunta2 = prompt("Deseas verlo")
let contador2 = 10


while (contador2 >= 0) {
    alert(contador2)
    console.log(contador2)  
    if (contador2 < 0) {
        alert("Gracias por verlo");
    } else {
        alert("Siguiente");
        } 
        contador2--
}

//Ejercicio 3 Pedir un número y contar hasta ahí 

let pregunta3 = prompt("Dame un número entre 10 y 20?")
let contador3 = 1

while (contador3 <= pregunta3) {
    alert(contador3)
    console.log(contador3)  
    if (contador3 > pregunta3) {
        alert("Gracias por verlo");
    } else {
        alert("Siguiente");
        } 
        contador3++
}
//Ejercicio 4 Pedir un número y temporizar hasta cero

let pregunta4 = prompt("Dame un número entre 10 y 20?")
let contador4 = pregunta4

while (contador4 >= 0) {
    alert(contador4)
    console.log(pregunta4)  
    if (contador4 < 0) {
        alert("Gracias por verlo");
    } else {
        alert("Siguiente");
        } 
        contador4--
}

