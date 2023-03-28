
function totalCarrito(arr){
    let resultado = 0;
    arr.forEach( producto => {
        resultado += producto.precio * producto.cantidad
        
    })
    return resultado;
}

function actualizarStock(id, cantidad) {
    const producto = listaProductos.find(producto => producto.id == id);
    producto.stock -= cantidad;
}

const carritoCompra = []
const listaProductos = [ 
                        { id: 1, nombre: "10 ALIAS + PAPAS (1 SALSA A ELECCION)", precio: 1500, cantidad: 0, stock: 10},
                        { id: 2, nombre: "15 ALIAS TRIO + PAPAS (3 SALSAS A ELECCION)", precio: 2000, cantidad: 0, stock: 10 },
                        { id: 3, nombre: "20 ALIAS + PAPAS (1 SALSA A ELECCION)", precio: 3000, cantidad: 0, stock: 15 },
                        { id: 4, nombre: "PULLED PORK SANDWICH + PAPAS", precio: 3000, cantidad: 0, stock: 8 },
                        { id: 5, nombre: "8 TENDERS DE POLLO + PAPAS", precio: 4000, cantidad: 0, stock: 3 },
                        { id: 6, nombre: "PAPAS PODEROSAS (TOPPING 1: CHEDDAR Y VERDEO)", precio: 3500, cantidad: 0, stock: 10 },
                        { id: 7, nombre: "PAPAS PODEROSAS (TOPPING 2: SALCHICHA ALEMANA, CHEDDAR Y VERDEO)", precio: 3500, cantidad: 0, stock: 0 },
                    ]
 
let mostrarProductos = ""

listaProductos.forEach( producto => {

    mostrarProductos += +producto.id +" producto: "+ producto.nombre +" precio: $"+ producto.precio+"\n"

} )

alert ("Bienvenido, para poder continuar con la compra porfavor seleccione la promo" );

alert(mostrarProductos)

let seguirComprando = true;

while(seguirComprando){

    let id = prompt("Ingrese la ID de la promo:")
    
    if( !isNaN(id) ){
        
        const producto = listaProductos.find( producto => producto.id == id)

        if(producto && producto.stock > 0){
            let cantidad = prompt("Cuantas promos queres llevar?")
            
            if(cantidad <= producto.stock){
                producto.cantidad = cantidad;
                carritoCompra.push(producto);
                actualizarStock(id, cantidad);
            } else {
                alert("Lo sentimos, no hay suficiente stock de ese producto.")
            }
        } else {
            alert("El ID ingresado no es valido o el producto seleccionado no tiene stock disponible. Vuelve a intentarlo nuevamente.")
        }
    }

    seguirComprando = prompt("Desea seguir comprando? (si / no)").toLowerCase() === "si";
}

alert( "El total de su compra fue de: $"+ totalCarrito(carritoCompra))
