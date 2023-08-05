/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:

   var Gato ={
      nombre,
      edad,
      meaow: function() {
         console.log('MEOW!!');
      },
      
   };
   console.log(Gato);
   return Gato.meaow();
};
   
   //crearGato('Maxi',3);

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var user1={nombre,email,password};
   console.log(user1);
}

//nuevoUsuario('Alex', 'aarrredondo@gmail',1234);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   
   objeto[propiedad]=null;
   
   console.log(objeto);
}


//agregarPropiedad(aviones={},'x');


function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   console.log(objeto);
   return objeto.marca();
}

//invocarMetodo(carro={marca:function(){console.log('I like it!!!')}},'marca');


function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   console.log(objetoMisterioso.numeroMisterioso*5)
}

//multiplicarNumeroDesconocidoPorCinco(objetoMisterioso={numeroMisterioso:2})

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   console.log(objeto);

}

//eliminarPropiedad(carro={Anio:null},'Anio')

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var tienePropiedad = objetoUsuario.hasOwnProperty('email');

console.log(tienePropiedad);
}

//tieneEmail(User1={email:'aarredondo@gmail.com',pswd:'1234'});
//tieneEmail(User2={nombre:'pancho lopez',contra:'2345'});

function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   var tienePropiedad = objeto.hasOwnProperty(propiedad);
   console.log(tienePropiedad);
}

//tienePropiedad (User1={email:'aarredondo@gmail.com',pswd:'1234'},'email');
//tienePropiedad (User2={nombre:'pancho lopez',contra:'2345'},'email');

function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objetoUsuario.Password===password)
      console.log(true);
   else
   console.log(false);
}

//verificarPassword(User1={email:'aarredondo@gmail.com',Password:'1234'},'1234');
//verificarPassword(User2={email:'alxarredondo@gmail.com',Password:'2345'},'1234');

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   console.log(objetoUsuario.Password);
   objetoUsuario.Password=nuevaPassword;
   console.log(objetoUsuario.Password);

}

//actualizarPassword(User2={email:'alxarredondo@gmail.com',Password:'2345'},'1234');

function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   console.log(objetoUsuario.amigos);

}

//agregarAmigo(objetoUsuario={amigos:['jose','carlos','alex']},'Cristina')

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   n=objetoMuchosUsuarios.length;
   for(i=0;i<n;i++) {
   console.log(objetoMuchosUsuarios[i].esPremium=true);
}
}

//pasarUsuarioAPremium(usuarios=[{nombre:'Jose',esPremium:false},{nombre:'Jesus',esPremium:false},{nombre:'Paula',esPremium:false},{nombre:'Josefina',esPremium:false}])

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var totalLikes=0;
   n=Usuario.posts.length;
   
   for(let i=0;i<n;i++){
      totalLikes=(Usuario.posts[i].likes)+totalLikes;
      
   }
   console.log(totalLikes);
}
//sumarLikesDeUsuario(Usuario={posts:[post1={likes:3},post2={likes:7},post4={likes:9}]});

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   var PrecioFinal;
   Producto.calcularPrecioDescuento();
   PrecioFinal=objetoProducto.PrecioTotal-Precio;
   console.log(PrecioFinal);
}

//agregarMetodoCalculoDescuento(Producto={PrecioTotal:100,porcentajeDeDescuento:.25,calcularPrecioDescuento:function(){Precio=Producto.PrecioTotal*Producto.porcentajeDeDescuento}})

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
