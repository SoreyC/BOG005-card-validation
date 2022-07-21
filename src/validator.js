const validator = {


  isValid: (creditCardNumber) => {

    //Para pasar un string a un array y se reversan
    let numbCard = creditCardNumber.split("");

    let numbCardReversed = numbCard.reverse();
    console.log(numbCardReversed)

    //Recorrido de un array (ciclo)
    let resultado = [];
    for (var i = 0; i < numbCardReversed.length; i++) {
      console.log('indice', i)
      if (!esPar(i)) {
        numbCardReversed[i] = numb2(Number(numbCardReversed[i]));
      } else {
        numbCardReversed[i] = Number(numbCardReversed[i]);
      }
    }
    console.log(numbCardReversed);

    const sumTotal = sumarNum(numbCardReversed);

    return multiplo10(sumTotal);



  },

  //maskify

  maskify: (creditCardNumber) => {
    let numeroTaj = creditCardNumber.length;
    let numero = creditCardNumber;
    if (numeroTaj < 4) {
      return numero;
      //console.log (typeof numero);
    }
    else {
      for (var i = 0; i < numeroTaj - 4; i++) {
        if (i < creditCardNumber.length) {
          var cadena1 = creditCardNumber.slice(-4);
          var cadena2 = "#";
          var cadena3 = cadena2.repeat(numeroTaj - 4) + cadena1;
          return cadena3
          //console.log (cadena3);
        }
      }
    }

  }
  // metodo que me devuelva si es par (boleanos)







}

export default validator;


function esPar(numero) {
  console.log('esPar', numero % 2 == 0);
  return numero % 2 == 0;

}


function numb2(numero) {
  console.log('numb2entrada', numero)
  numero = numero * 2;
  let numeros = [];
  if (numero >= 10) {
    numeros = numero.toString().split("");
    numero = Number(numeros[0]) + Number(numeros[1]);

  }
  console.log('numb2', numero, numeros);
  return numero;
}


function sumarNum(numbCardReversed) {
  let sum = 0;

  for (let j = 0; j < numbCardReversed.length; j++) {
    sum += numbCardReversed[j];
  }
  console.log('suma', sum)
  return sum;
}

function multiplo10(numero) {
  return numero % 10 == 0;
}
