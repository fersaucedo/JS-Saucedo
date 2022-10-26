
function calcular() {

    let numero1 = parseFloat(prompt("Ingresar primer numero: "));
    let operador = prompt("ingresar operacion (+, -, x, /): ");
    let numero2 = parseFloat(prompt("Ingresar segundo numero: "));
    let resultado = 0;


    if (operador === '+') {
        resultado = numero1 + numero2;
        alert("El resultado es : " + resultado);
    } else if (operador === '-') {
        resultado = numero1 - numero2;
        alert("El resultado es : " + resultado);
    } else if (operador ==='x') {
        resultado = numero1 * numero2;
        alert("El resultado es : " + resultado);
    } else if (operador === '/') {
        resultado = numero1 / numero2;
        alert("El resultado es : " + resultado);
    } else {
        alert("Error al ingresar un operador. Por favor, intentelo nuevamente ingresando '+, '-', 'x', '/'");
    }    
};

do {
    calcular();
    continuar = confirm("Desea realizar otra operacion?");
} while (continuar)










