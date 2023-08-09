/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var Array1=[];
   var Array2=[];
   var ArrayTotal=[[]];
   let i=0;
   for (var prop in objeto){
//   console.log('Esta es la propiedad: ', prop);
   Array1[i]=prop;
  // console.log('Este es el valor: ', objeto[prop]);
   Array2[i]=objeto[prop];
      ArrayTotal[i,i]=[Array1[i],Array2[i]];
   i++
   //console.log(Array1);
   //console.log(Array2);
   console.log(ArrayTotal);
}
}

//deObjetoAarray(EJEMPLO= {D: 1, B: 2, C: 3});

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   alphabet={a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0}
   cadena=string.split("");
   
   let i=0;
   let c=0;
   for (var prop in alphabet){
      let j=0;
      for(let i=0;i<cadena.length;i++){
      if(cadena[i]===prop){
         j++
      alphabet[prop]=j;
      }
     else c=j;
       }
   }
   console.log(prop,cadena,alphabet,i,c);
    
   

   
}

//numberOfCharacters(EJEMPLO= 'adsjfdsfsfjsdjfhacabcsbajda');

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   //var cadena=string.split("");
   
var palabras = string.split(/(?=[A-Z])/);
var pivote;
pivote=palabras[0];
for (let i=0;i<palabras.length;i++)
palabras[i]=palabras[i+1]

var nuevaFrase = palabras.join("") + pivote;
console.log(nuevaFrase);


}

//capToFront(string='soyHENRY');

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var cadena=frase.split("");
   var Array1=[];
   var n=cadena.length
   for(let i=0;i<n;i++)
      Array1[n-i]=cadena[i]
   Array1=Array1.join("");
   console.log(Array1);

}

//asAmirror(EJEMPLO='THE HENRY CHALLENGE IS CLOSE!') 



function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var n=0,j=0;
   var cadena = numero.toString();
   cadena=cadena.split("");
   n=cadena.length;
   for(let i=0;i<n;i++){
  
   if(cadena[n-1-i]===cadena[i]){
      j++;
   }
   else {console.log('NO ES CAPICUA');
      break;}
   }

   if (n===j) console.log('ES CAPICUA');
}

//capicua(1001);
//capicua(1011);

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var cadena=string.split("");
   var n=cadena.length;

   for(let i=0;i<n;i++){
      if(cadena[i]==='A'||cadena[i]==='B'||cadena[i]==='C'){
         cadena[i]='';
      }
   }
   cadena=cadena.join("");
   console.log(cadena);
}

//deleteAbc(EJEMPLO='CALANDRIA BELLA');

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var Array1=[],pivote;
   n=arrayOfStrings.length;
   
   for(let i=0;i<n;i++){
      Array1[i]=arrayOfStrings[i].length}
      console.log(Array1);

   for(let i=0;i<n;i++){
      if(Array1[i]>Array1[i+1]){
         pivote=arrayOfStrings[i];
         arrayOfStrings[i]=arrayOfStrings[i+1];
         arrayOfStrings[i+1]=pivote;
         Array1[i]=arrayOfStrings[i];
   } 
   else Array1[i]=arrayOfStrings[i];
 
}

console.log(Array1);
}

//sortArray(EJEMPLO= ['You','are','beautiful','looking']);

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

      var arrayUnion=[];
      var n=array1.length;
      var m=array2.length;

      if(m>n) n=m;
      else(n=n);
      console.log(n);
      console.log(array1);
      console.log(array2);

   for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
   if(array1[i]===array2[j]){
      arrayUnion[i]=array1[i];
   }
   }
   }
   console.log(arrayUnion);
}

//buscoInterseccion(a=[4,2,3],b=[1,3,4])

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
