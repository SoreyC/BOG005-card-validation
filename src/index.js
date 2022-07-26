import validator from './validator.js';

//console.log(validator);

// Para cambiar de la vista comprar a la vista validar

document.getElementById("btn-comprar1").addEventListener("click", () => {
    document.getElementById("bloque_validar").style.display = "block";
    document.getElementById("bloque_comprar").style.display = "none";
    document.getElementById("bloque_finalizar").style.display = "none";
})

document.getElementById("btn-comprar2").addEventListener("click", () => {
    document.getElementById("bloque_validar").style.display = "block";
    document.getElementById("bloque_comprar").style.display = "none";
    document.getElementById("bloque_finalizar").style.display = "none";
})

document.getElementById("btn-comprar3").addEventListener("click", () => {
    document.getElementById("bloque_validar").style.display = "block";
    document.getElementById("bloque_comprar").style.display = "none";
    document.getElementById("bloque_finalizar").style.display = "none";
})

//Finalizar compra

document.getElementById("btn-finalizar-compra").addEventListener("click", () => {
    document.getElementById("bloque_finalizar").style.display = "block";
    document.getElementById("bloque_validar").style.display = "none";
    document.getElementById("bloque_comprar").style.display = "none";
})

//Boton validar

document.getElementById("btn-validar").addEventListener("click", () => {
    let input = document.getElementById("numerotarjeta").value
    let valido = validator.isValid(input);
    let name = document.getElementById("name").value
    if (name === '') {
        return alert("Ingrese su nombre")
    }

    if (input === '') {
        return alert("Ingrese el número de su tarjeta")
    }
    //console.log(valido);


    //Si el modulo de valido es 0 muestra mensaje de tarjeta válida de lo contrario muestra tarjeta no válida
    let mascara = validator.maskify(input);
    
    document.getElementById("numerotarjeta").value = mascara;

    //console.log(mascara)

    if (valido) {
        document.getElementById("anuncioV").style.display = "block";
        document.getElementById("anuncioNV").style.display = "none";

    }
    else {
        document.getElementById("anuncioNV").style.display = "block";
        document.getElementById("anuncioV").style.display = "none";
       
        return alert("¡TARJETA NO VALIDA INTENTE NUEVAMENTE!")
    }

})