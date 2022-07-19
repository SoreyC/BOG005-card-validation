import validator from './validator.js';

console.log(validator);

// Eliminando espacios en blanco y letras en el input del
// número de la tarjeta

formularioValidacion.numerotarjeta.addEventListener("keyup", (e) => {
    let valorInput = e.target.value;

   //para eliminar los espacios en blanco utilizo la expresion regular(/\s/g,'') 
   //página regexr para probar las expresiones 
   formularioValidacion.numerotarjeta.value = valorInput.replace(/\s/g,'')
   //para elimirar las letras utilizo la expresion regular(/\D/g,'')
   .replace(/\D/g,'');
});

// Eliminando los numeros del nombre y dar mensaje de campo vacio
    nameValidacion.name.addEventListener("keydown", (e) => {
        let numbers=[0,1,2,3,4,5,6,7,8,9]
   
        let valorInput = e.target.value;
        if(!numbers.includes(valorInput))
        {
            return
        }



   //para eliminar los espacios en blanco utilizo la expresion regular(/[0-9]/g,'') 
   //página regexr para probar las expresiones 
   nameValidacion.name.value = valorInput.replace(/[0-9]/g,'');

   if(valorInput ==''){
      nameValidacion.name.value = 'Debe completar este campo'
    }
 });

 
