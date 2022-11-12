const articulos = [{
        id: '1',
        nombre: 'Skate',
        precio: 15000
    },
    {
        id: '2',
        nombre: 'Longboard',
        precio: 20000
    },
    {
        id: '3',
        nombre: 'Surf Skate',
        precio: 13000
    }

];


function mostrarListado() {
    const listado = confirm('A continuacion, se mostrará la lista de articulos a la venta y sus montos. Desea mostrarla en orden del menor precio al mayor?');
    if (listado) {
        ascendente();
    } else {
        descendente();
    }

    comprar();
};


const ascendente = () => {
    articulos.sort((a, b) => a.precio - b.precio);
    listadoOrdenado();
};


const descendente = () => {
    articulos.sort((a, b) => b.precio - a.precio);
    listadoOrdenado();
};

const listadoOrdenado = () => {
    let array = [];
    articulos.forEach(producto => array.push(producto.nombre + ' $' + producto.precio));
    alert('Lista de precios:' + '\n' + array.join('\n'));
};


function comprar() {
    let articulo = '';
    let cantidad = 0;
    let total = 0;


    do {
        articulo = prompt('Que tabla desea comprar? Ingrese: 1 si desea comprar un SKATE. Ingrese: 2 si desea comprar un LONGBOARD. Ingrese: 3 si desea comprar un SURF SKATE.', 'Ingrese el articulo');

        const producto = articulos.find(producto => producto.id === articulo);

        cantidad = parseInt(prompt('Por favor ingrese la cantidad que desea comprar:'));

        let cantidadValidada = validarCantidad(cantidad);


        if (producto) {
            total += producto.precio * cantidadValidada;
            alert('El subtotal de la compra es: $' + total);
        } else {
            alert('El producto no se encuentra en stock o ha ingresado una opción incorrecta.');
        };

        seguirComprando = confirm('Desea agregar otro producto?');

    } while (seguirComprando);

    calcularEnvio(total);
};

function validarCantidad(cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert("ERROR! No se ha ingresado una cantidad");
        } else {
            alert('Debe ingresar un número distinto de cero.')
        }
        cantidad = parseInt(prompt('Por favor ingrese la cantidad que desea comprar:'));
    }

    return cantidad;
}

function calcularEnvio(totalCompra) {
    let envio = confirm('Desea calcular el costo de envio?');

    if (envio && totalCompra >= 15000) {
        alert('Como su compra supera los $15000 ,el envio es gratis! El total de la compra es: ' + totalCompra);
    } else if (envio && totalCompra < 15000 && totalCompra !== 0) {
        totalCompra += 580;
        alert('El costo de envío es de $580. El total de la compra es: $' + totalCompra);
    } else {
        alert('El costo total de la compra es: $' + totalCompra);
    }
};



let mensaje = alert('Bienvenido! Esto es un simulador de carrito de compras.');

mostrarListado();