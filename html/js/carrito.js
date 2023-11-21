let boxPlus = document.getElementById("boxPlus");
let boxUnidades = document.getElementById("boxUnidades");
let boxMinus = document.getElementById("boxMinus");
//sub total
let resultado =document.getElementById("resultado");
//precio unidad
const precioUnidad = 84000;
const precioUnidadStr =Intl.NumberFormat("de-De").format(precioUnidad);
document.getElementById("precioUnidad").innerText = "$" + precioUnidadStr;

boxPlus.addEventListener("click", function() {
    let auxUnidades = parseInt(boxUnidades.innerText)

    if(auxUnidades < 10){
        boxUnidades.innerHTML = ( auxUnidades + 1);

        //sub total
        let valorsubtotal = parseInt(boxUnidades.innerHTML) * precioUnidad;
        resultado.innerHTML =Intl.NumberFormat("de-De").format(valorsubtotal);
        //productos
        if(boxUnidades.innerHTML == 1){
            document.getElementById("cantProductos").innerHTML= boxUnidades.innerHTML + " producto";
        }else{
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " productos";
        }
        
    }
});


boxMinus.addEventListener("click", function() {
    let auxUnidades = parseInt(boxUnidades.innerText)

    if(auxUnidades > 0){
        boxUnidades.innerHTML = ( auxUnidades - 1);

        //sub total
        let valorsubtotal = parseInt(boxUnidades.innerHTML) * precioUnidad;
        resultado.innerHTML =Intl.NumberFormat("de-De").format(valorsubtotal);
        //productos
        if(boxUnidades.innerHTML == 1){
            document.getElementById("cantProductos").innerHTML= boxUnidades.innerHTML + " producto";
        }else{
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " productos";
        }
        
    }
});



