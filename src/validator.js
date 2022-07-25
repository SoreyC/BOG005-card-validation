const validator = {

  isValid: (creditCardNumber) => {

    //Para pasar un string a un array y se reversan
    let numbCard = creditCardNumber.split("");

    let numbCardReversed = numbCard.reverse();
    //console.log(numbCardReversed)

    //Recorrido de un array (ciclo)
    
    for (var i = 0; i < numbCardReversed.length; i++) {
      //console.log('indice', i)
      if (!esPar(i)) {
        numbCardReversed[i] = numb2(Number(numbCardReversed[i]));
      } else {
        numbCardReversed[i] = Number(numbCardReversed[i]);
      }
    }
    //console.log(numbCardReversed);

    const sumTotal = sumarNum(numbCardReversed);

    return multiplo10(sumTotal);



  },

  //maskify

  maskify: (creditCardNumber) => {
    let mascara = ''
    let last4 = ''
      for(let i = 0; i < creditCardNumber.length-4; i++){
        mascara += '#'
      

      }
      //console.log(mascara)

      for(let i = creditCardNumber.length-4; i< creditCardNumber.length; i++){
        last4 += creditCardNumber[i]
        console.log(last4)
      }
      return mascara + last4;
    }
}

export default validator;

// metodo que me devuelva si es par (boleanos)

function esPar(numero) {
 // console.log('esPar', numero % 2 == 0);
  return numero % 2 == 0;

}


function numb2(numero) {
 // console.log('numb2entrada', numero)
  numero = numero * 2;
  let numeros = [];
  if (numero >= 10) {
    numeros = numero.toString().split("");
    numero = Number(numeros[0]) + Number(numeros[1]);

  }
 // console.log('numb2', numero, numeros);
  return numero;
}


function sumarNum(numbCardReversed) {
  let sum = 0;

  for (let j = 0; j < numbCardReversed.length; j++) {
    sum += numbCardReversed[j];
  }
 // console.log('suma', sum)
  return sum;
}

function multiplo10(numero) {
  return numero % 10 == 0;
}
