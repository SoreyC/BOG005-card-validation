import validator from './validator.js';

console.log(validator);

// Para cambiar de comprar a validar

document.getElementById("btn-comprar1").addEventListener("click", () => {
    document.getElementById("bloque_validar").style.display = "block";
    document.getElementById("bloque_comprar").style.display = "none";
})

document.getElementById("btn-comprar2").addEventListener("click", () => {
    document.getElementById("bloque_validar").style.display = "block";
    document.getElementById("bloque_comprar").style.display = "none";
})

document.getElementById("btn-comprar3").addEventListener("click", () => {
    document.getElementById("bloque_validar").style.display = "block";
    document.getElementById("bloque_comprar").style.display = "none";
})

// Revertir el numero
// 12345 => 54321 => ['1', '2', '3', '4', '5'] => ['5', '4', '3', '2', '1'] => '54321' => 54321

function revertirNumero(numerotarjeta){
    return Number(numerotarjeta.toString().split('').reverse().join(''))
}

let valor = 12345;

console.log(valor);
console.log(revertirNumero(valor));

isvali




// Que el input numero de tarjeta solo acepte numeros

//formularioValidacion.numerotarjeta.addEventListener("keydown", (e) => {
  //  let valorInput = e.target.value;
  //  console.log("hola", e.target)
  //  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  //  if (!numbers.includes(valorInput)) {
    //    return
  //  }
//
// })


//para eliminar los espacios en blanco utilizo la expresion regular(/\s/g,'') 
    //página regexr para probar las expresiones 

    // formularioValidacion.numerotarjeta.value = valorInput.replace(/\s/g,'')

    //para elimirar las letras utilizo la expresion regular(/\D/g,'')
    //  .replace(/\D/g,'');
    // });

    // Eliminando los numeros del nombre y dar mensaje de campo vacio

    //   nameValidacion.name.addEventListener("keydown", (e) => {




    //para eliminar los espacios en blanco utilizo la expresion regular(/[0-9]/g,'') 
    //página regexr para probar las expresiones 

   // nameValidacion.name.value = valorInput.replace(/[0-9]/g,'');

   //  if(valorInput ==''){
    // nameValidacion.name.value = 'Debe completar este campo'
//}
 //});

//}