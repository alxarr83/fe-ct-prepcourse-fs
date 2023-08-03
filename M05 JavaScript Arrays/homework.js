/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   console.log(array[0]);
}

//devolverPrimerElemento(array=[1,2,3,4]);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   var n;
   n=array.length;
   console.log(array[n-1]);
}

//devolverUltimoElemento(array=[1,2,3,4]);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var n;
   n=array.length;
   console.log(n);
}

//obtenerLargoDelArray(array=[1,2,3,4,5,6]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var masUno = array.map( (num) => { return num + 1 } );
   console.log(masUno);
}

//incrementarPorUno(array=[1,2,3,4,5,6]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento);
   console.log(array);
}

//agregarItemAlFinalDelArray(array=[1,2,3,4,5,6],1);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   console.log(array);
}

//agregarItemAlComienzoDelArray(array=[1,2,3,4,5,6],1);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabras1=palabras.join(' ');
   console.log(palabras1);
}

//dePalabrasAFrase(palabras=['Hello', 'world','Today!']);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var exists;
   exists=array.includes(elemento);
   console.log(exists);
}

//arrayContiene(array=['Hello', 'world','Today!'], 'world');

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
var suma=0,n,i=0;
n=arrayOfNums.length;
while(i<n){
   suma=arrayOfNums[i]+suma;
   i++;
}
console.log(suma);
}

//agregarNumeros(arrayOfNums=[1,1,1,1]);


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var prom=0,n,i=0;
   n=arrayOfNums.length;
while(i<n){
   prom=arrayOfNums[i]+prom;
   i++;
}
prom=prom/n;
console.log(prom);

}

//promedioResultadosTest(arrayOfNums=[1,1,2,2]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var n,i=0,p;
   n=arrayOfNums.length;
   while(i<n){
      if(arrayOfNums[i]>arrayOfNums[i+1]){
         p=arrayOfNums[i+1];
         arrayOfNums[i+1]=arrayOfNums[i];
         arrayOfNums[i]=p;}
      else arrayOfNums[i]=arrayOfNums[i];
      i++;
   }
   console.log(arrayOfNums[n-1]);
   
}

//numeroMasGrande(arrayOfNums=[2,1,1,3,2]);


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var mult=1,n,i=0;
   n=arguments.length;
      while(i<n){
         mult=arguments[i]*mult;
         i++;
                }

console.log(n);
console.log(mult);
}

//multiplicarArgumentos(2,3,4,1);

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var n;
   n=array.length;
   if(n>=18)
    console.log(array);
    else
    console.log('menor que 18');

}

//cuentoElementos(array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
      if(numeroDeDia==1||numeroDeDia==7)
      console.log('ES FIN DE SEMANA');
      else
      console.log('dia laboral');
}

//diaDeLaSemana(5);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var str=num.toString();
   if(str[0]==9)
   console.log('EMPIEZA CON NUEVE')
   else console.log(false);
}

//empiezaConNueve(91342);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var i;
   var n=array.length,cond=[];
   for(i=0;i<n-1;i++){
      if(array[i]===array[i+1]){     
         cond[i]=true;
      
      }
      else {
      cond[i]=false;
      
      }
   } 
   if (cond.includes(false))
      console.log(false);
      else
      console.log(true);

}

//todosIguales(array=[1,1,1,1,1]);

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var i;
   var n=array.length,array2=[];
   for(i=0;i<n;i++){
      if(array[i]==='Enero'||array[i]==='Marzo'||array[i]==='Noviembre')    
         array2[i]=array[i];
      else array2[i]='x';
         
         } 
      if (array2.includes('Enero'||'Marzo'||'Noviembre'))
         console.log(array2);
      else
         console.log('NO SE ENCONTRARON LOS MESE PEDIDOS');

}

//mesesDelAño(array=['Marzo','Abril','Mayo','Junio','Julio','Agosto']);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
    var i,Tab=[];

    for (i=0;i<10;i++)
      Tab[i]=(i+1)*6;
   
      console.log(Tab);

}

//tablaDelSeis();



function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var i;
   var n=array.length,array2=[];
   for(i=0;i<n;i++){
      if(array[i]>100)    
         array2[i]=array[i];
      else array2[i]=0;
         
         } 
   console.log(array2);
}

mayorACien(array=[2,101,200,99,32,21,315]);

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
