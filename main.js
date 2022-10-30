let mensaje = alert('Hola! Esto es un simulador de calculadora. Por favor, complete los siguientes campos.');
let numero1 = 0;
let operador = '';
let numero2 = 0;
let resultado = 0;

function calcular() {

    if (operador === '+') {
        resultado = numero1 + numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else if (operador === '-') {
        resultado = numero1 - numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else if (operador === 'x' || operador === 'X') {
        resultado = numero1 * numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else if (operador === '/') {
        resultado = numero1 / numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else {
        alert("Error al ingresar un operador. Por favor, intentelo nuevamente ingresando '+', '-', 'x', '/'");
    }

}


function validador1() {
    while (Number.isNaN(numero1)) {
        alert("ERROR! No se ha ingresado un número");
        numero1 = parseFloat(prompt("Por favor, ingrese nuevamente el número: ")); 
    } 
};

function validador2() {
    while (Number.isNaN(numero2)) {
        alert("ERROR! No se ha ingresado un número");
        numero2 = parseFloat(prompt("Por favor, ingrese nuevamente el segundo número: ")); 
    } 
};



do {
    numero1 = parseFloat(prompt("Por favor, ingrese un número: "));
    validador1(numero1);

    operador = prompt("Ahora ingrese la operación que desea realizar ( '+', '-', 'x', '/' ): ");

    numero2 = parseFloat(prompt("En el siguiente campo, ingrese un segundo número: "));
    validador2(numero2);

    calcular();

    continuar = confirm("Desea realizar otra operacion?");
    
} while (continuar);