/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
if (x>y)
      console.log(x);
   else if (x===y)
         console.log(x);
   else if (y>x)
         console.log(y);


}

//obtenerMayor(4,4);

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   if(edad>=18)
    console.log('ALLOWED');
    else console.log('NOT ALLOWED');
}

//mayoriaDeEdad(16);


function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   if (status===1) console.log('ONLINE');
   else if(status===0) console.log('AWAY');
   else console.log('OFFLINE');
}

//conection(0);

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   switch (idioma) {
      case 'aleman':
        console.log('GUTEN TAG!');
        break;
      case 'mandarin':
        console.log('NI HAO!');
        break;
      case 'ingles':
        console.log('HELLO!');
        break;
      default:
        console.log('HOLA! ');
    }
    
    
}
//saludo('ingles');

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   switch (color) {
      case 'blue':
        console.log('"This is blue"');
        break;
      case 'red':
        console.log('"This is red"');
        break;
      case 'green':
        console.log('"This is green"');
        break;
      case 'orange':
        console.log('"This is orange"');
        break;
      default:
        console.log('Color Not Found');
    }
  
}

//colors('green');

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   if(num===10||num===5)
      console.log(true);
      else console.log(false);
}

//esDiezOCinco(5);

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   if(num<50 && num>20)
      console.log(true);
   else console.log(false);
}

//estaEnRango(51);



function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   if(num%1===0)
      console.log(true);
      else
      console.log(false);
}

//esEntero(-10.001);

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   if (num%3===0 && num%5===0) console.log('fizzbuzz');
   else if (num%5===0) console.log('buzz');
   else if (num%3===0) console.log('fizz'); 
}

//fizzBuzz(9);
//fizzBuzz(25);
//fizzBuzz(15);

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:

   var cond=0;
   
      if (num1>num2 && num1>num3){
        console.log('"Numero 1 es mayor y positivo"');
        cond++;
      }
      if (num1<0 || num2<0 || num3<0){
        console.log('"Hay negativos"');
        cond++;}
      if (num3>num1 && num3>num2){
        console.log(num3=num3+1);
        cond++;}
      if (num1===0 && num2===0 && num3===0){
        console.log('"Error"');
        cond++;}

      if (cond==0){
      
      console.log(false);}

}
 
//operadoresLogicos(2,2,2);

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   var P,count=0;
   if (num<1||num===1) 
      console.log('NO ES PRIMO');

   for(let i=1;i<=num;i++){
      P=num%i;
      if (P==0) 
         count++;
   }
   if (count===2) console.log('ES PRIMO');
   else console.log('NO ES PRIMO');

}

//esPrimo(1);

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   if (valor===true) console.log('SOY VERDADERO');
   else console.log('SOY FALSO');
}

//esVerdadero(true);
//esVerdadero(false);

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   if(num/100>=1 && num/100<1) console.log(true);
   else console.log(false);
}
//tieneTresDigitos(1500);

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
let i=0;
   do (num=num+5,i++)
   while (i<8)
console.log(num);
console.log(i);
}

//doWhile(1);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
