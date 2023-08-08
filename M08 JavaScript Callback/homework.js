/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var LMayus=nombre.toUpperCase().charAt(0);
   var nombreArray=nombre.split("");
   nombreArray[0]=LMayus;
   var Mayus=nombreArray.join("");
   console.log(Mayus);
}

//mayuscula('alejandro');

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   return cb;
}

//var resultado=invocarCallback(mayuscula);
//console.log(resultado);

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var resultado=cb(num1,num2);
   console.log(resultado);
   
}

function suma (num1,num2){
   return num1+num2;
}

//operacionMatematica(5,3,suma);


function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var resultado=cb(arrayOfNumbers);
   console.log(resultado);
}

function sumaArreglo (arrayOfNumbers){
   var n=arrayOfNumbers.length;
   var total=0;
   for (let i=0;i<n;i++)
      total=arrayOfNumbers[i]+total;
   return total;
}

//sumarArray([3,5,7,9,1],sumaArreglo);


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   var resultado=[];
   n=array.length;
   for (let i=0;i<n;i++){
   resultado[i]=cb(array[i]);
   console.log(resultado);
      }
}

function iteracion (array){
   return array+'iteracion'
}

//forEach([3,5,7,9,1],iteracion);

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var resultado=[];
   n=array.length;
   for (let i=0;i<n;i++){
   resultado[i]=cb(array[i]);
   
      }
      console.log(resultado);

}


function iteracion (array){
   return array+'iteracion'
}

//map([1,2,3,4,5],iteracion);

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   arrayNuevo=arrayOfStrings.split("");
   var LA=[],j=0;
   n=arrayNuevo.length;
    for (let i=0;i<n;i++){
      if(arrayNuevo[i]==='A'||arrayNuevo[i]==='a'){
       LA[j]=arrayNuevo[i];
       j++;}
      else 
      arrayNuevo[i]=arrayNuevo[i];
      }
         LA=LA.join("");
       console.log(LA);
       

    }


    filter('ALEJANDRA');

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
