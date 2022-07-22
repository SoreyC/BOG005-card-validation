import validator from './validator.js';

console.log(validator);

// Para cambiar de comprar a validar

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

    console.log(valido);


    //Si el modulo de valido es 0 muestra mensaje de tarjeta válida de lo contrario muestra tarjeta no válida
    let mascara = validator.maskify(input.value);
    input = mascara;

    if (valido) {
        document.getElementById("anuncioV").style.display = "block";
        document.getElementById("anuncioNV").style.display = "none";

    }
    else {
        document.getElementById("anuncioNV").style.display = "block";
        document.getElementById("anuncioV").style.display = "none";

    }
})

// Eliminando espacios en blanco y letras en el input del
// número de la tarjeta

formularioValidacion.numerotarjeta.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;

    //para eliminar los espacios en blanco utilizo la expresion regular(/\s/g,'') 
    //página regexr para probar las expresiones 
    formularioValidacion.numerotarjeta.value = valorInput.replace(/\s/g, '')
        //para elimirar las letras utilizo la expresion regular(/\D/g,'')
        .replace(/\D/g, '');
});


// Eliminando los numeros del nombre y dar mensaje de campo vacio
//nameValidacion.name.addEventListener("keyup", (e) => {
 //   let valorInput = e.target.value;
    
    //para eliminar los espacios en blanco utilizo la expresion regular(/[0-9]/g,'') 
    //página regexr para probar las expresiones 
   // nameValidacion.name.value = valorInput.replace(/[0-9]/g, '');

  //  if (valorInput == '') {
  //      nameValidacion.name.value = 'Debe completar este campo'
  //  }
// });

// Revertir el numero
// 12345 => 54321 => ['1', '2', '3', '4', '5'] => ['5', '4', '3', '2', '1'] => '54321' => 54321

//function revertirNumero(numerotarjeta){
// return Number(numerotarjeta.toString().split('').reverse().join(''))
//}

//let valor = 12345;

//console.log(valor);

//let valorInput = document.getElementById("numerotarjeta").value;
// document.getElementById("numerotarjeta").innerHTML = (valorInput.value);

//console.log(valorInput);

//document.getElementById("validad").addEventListener("click", () => {
//   let valido = validador.isValid(valorInput.value);
//})



//}