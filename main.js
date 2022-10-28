let mensaje = alert('Hola! Esto es un simulador de calculadora. Por favor, complete los siguientes campos.');

function calcular() { 

    let numero1 = parseFloat(prompt("Por favor, ingrese un número: "));
    let operador = prompt("Ahora ingrese la operación que desea realizar ( '+, '-', 'x', '/' ): ");
    let numero2 = parseFloat(prompt("En el siguiente campo, ingrese un segundo número: "));
    let resultado = 0;

    if (operador === '+') {
        resultado = numero1 + numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else if (operador === '-') {
        resultado = numero1 - numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else if (operador ==='x' || operador === 'X') {
        resultado = numero1 * numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else if (operador === '/') {
        resultado = numero1 / numero2;
        alert("El resultado de su cuenta es : " + resultado);
    } else {
        alert("Error al ingresar un operador. Por favor, intentelo nuevamente ingresando '+, '-', 'x', '/'");
    }
};

do {
    calcular();
    continuar = confirm("Desea realizar otra operacion?");
} while (continuar);















