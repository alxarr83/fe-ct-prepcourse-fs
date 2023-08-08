/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/
//se creo global para que se utilice en todas las funciones;

class Usuario {
   constructor(usuario,nombre,email,password) {
      this.usuario=usuario;
      this.nombre = nombre;
      this.email = email;
      this.password=password;
      this.cadena=[];
   }
   saludar() {
      console.log('Hola, mi nombre es  ' + this.nombre);
   }
}


function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
    /* class Usuario {
      constructor(usuario,nombre,email,password) {
         this.usuario=usuario;
         this.nombre = nombre;
         this.email = email;
         this.password=password;
         this.cadena=[];
      }
      saludar() {
         console.log('Hola, mi nombre es  ' + this.nombre);
      }
   } */
   let alex = new Usuario('aarredondo83','Alejandro');
   alex.saludar();
  
   return Usuario;
}

crearUsuario();

function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:

   Usuario.prototype.agregarCadena = function (string) {
      this.cadena.push(string);
   };
   
   let saludar = new Usuario();
   saludar.agregarCadena('Hello World');
   console.log(saludar.cadena);
}

agregarMetodoPrototype(Usuario);

function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".

   String.prototype.reverse = function () {
      var cadenaModificada = [];
      let n=this.length;
      var p;
      for (var i = 0; i < n; i++) {
             p=cadenaModificada.push(this[i]);
             cadenaModificada.push(this[i])=cadenaModificada.push(this[n-1]);
             cadenaModificada.push(this[ i ])=p;
             }

             return cadenaModificada;
            }
      
       
   var cadena = 'HELLO!';
   var cadenaArray = cadena.split("");
   //console.log(cadenaArray);
   var cadenaReverse = cadenaArray.reverse();
   console.log(cadenaReverse);
}

//agregarStringInvertida();

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
