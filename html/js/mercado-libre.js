class Automovil{
    constructor(marca, modelo, precio, anyo, kilometos,ciudad, imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometos = kilometos;
        this.ciudad = ciudad;
        this.imagen = imagen;

    }
}
let auto1= new Automovil("redmi", "Funda Estuche Anti Choque + anillo + vidrio", "$40.000", "2023", "23km", "Pitalito", "img/funda-redmi.jpg");

let auto2= new Automovil("redmi", "Funda Estuche Anti Choque + anillo", "$33.000", "2023", "25km", "pitalito", "img/funda-anillo.jpg" );

let auto3= new Automovil("redmi", "Funda Estuche Anti Choque + vidrio", "$32.900", "2023", "40km", "pitalito", "img/funda-roja.jpg" )

let boxProductos = document.getElementById("boxProductos");
let inputBusqueda = document.getElementById("inputBusqueda").value;

window.addEventListener("keydown", (event) => {
    if (event.key == "redmi"){
        let inputBusqueda= inputBusqueda.toString
        if(inputBusqueda.innerHTML == "redmi"){
            cargarAutomovil(auto3);
        }
    }  
});

/* cargarAutomovil(auto1);
cargarAutomovil(auto2);
 */

function cargarAutomovil(auto1) {
    /* contenedor para los para los productos individuales */
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");

    /* contenedor para la imagen  */
    let boxImagen = document.createElement("div");
    boxProducto.appendChild (boxImagen);
    boxImagen.setAttribute("class", "box-imagen");
    let imagenProducto = document.createElement("img");
    boxImagen.appendChild (imagenProducto);
    imagenProducto.setAttribute("src", auto1.imagen + "");
    imagenProducto.setAttribute("class", "imagen-producto");

    /* contenedor para la informacion */
    let infoProducto = document.createElement("div");
    boxProducto.appendChild (infoProducto);
    infoProducto.setAttribute("class", "box-info-producto");

    let marcaProducto = document.createElement("label");
    infoProducto.appendChild (marcaProducto);
    let nodoMarcaProducto = document.createTextNode(auto1.marca + " ");
    marcaProducto.appendChild (nodoMarcaProducto);
    marcaProducto.setAttribute("class", "marca-producto");

    /* cargar el modelo */
    let modelo = document.createElement("label");
    infoProducto.appendChild (modelo);
    let nomodelo = document.createTextNode(auto1.modelo + " ");
    modelo.appendChild (nomodelo);
    modelo.setAttribute("class", "modelo-producto");

    /* precio */
    let precioProducto = document.createElement("label");
    infoProducto.appendChild(precioProducto);
    let nodoPrecioProducto = document.createTextNode(auto1.precio + " ");
    precioProducto.appendChild(nodoPrecioProducto);
    precioProducto.setAttribute("class", "precio-producto");

    /* año */
    let anyoProducto = document.createElement("label");
    infoProducto.appendChild(anyoProducto);
    let nodoanyoProducto = document.createTextNode(auto1.anyo + " · ");
    anyoProducto.appendChild(nodoanyoProducto)
    anyoProducto.setAttribute("class", "anyo-producto");

    /* kilometraje */
    let kilometraje = document.createElement("label");
    infoProducto.appendChild(kilometraje);
    let nodokilometrajeProducto = document.createTextNode(auto1.kilometos + " · ");
    kilometraje.appendChild(nodokilometrajeProducto)
    kilometraje.setAttribute("class", "kilometraje");

    /* ciudad */
    let ciudad = document.createElement("label");
    infoProducto.appendChild(ciudad);
    let nodociudadProducto = document.createTextNode(auto1.ciudad);
    ciudad.appendChild(nodociudadProducto)
    ciudad.setAttribute("class", "ciudad");
}



















/* pagina: https://listado.mercadolibre.com.co/fundas-redmi-note-12-pro-4g#D[A:fundas%20redmi%20note%2012%20pro%204g] */