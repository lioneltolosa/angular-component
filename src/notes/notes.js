// /* let */
// //Block Scope

// var funcs = [];
// for (let i = 0; i < 5; i += 1) {
//   funcs.push(function () {
//     console.log(i);
//   })
// }
// funcs.forEach(function (func) {
//   func()
// });


// function hello() {
//   var a = "function";
//   for(var i = 0; i < 10; i++) {
//     var a ="hola bebe";
//   }
//   console.log(a);
// }
// hello();


// //Immediately Invoked Function Expression (IIFE)
// //1

// function poni() {
//   var a = "function";
//   for(var i = 0; i < 10; i++) {
//     function poni2(){
//       var a ="hola bebe";
//     }
     
//   }
//   console.log(a);
// }
// poni();


// //2
// function hello() {
//   var a = "function";
//   for (var i = 0; i < 10; i++) {
//     (function(){
//       var a = "block";
//     })();
     
//   }
//   console.log(a);
// }
// hello();



// // Using let in for loops

// var funcs = [];
// for (let i = 0; i < 5; i += 1) {
//     funcs.push(function () {
//         console.log(i);
//     })
// }
// funcs.forEach(function (func) {
//     func()
// });



// // CONST EXAMPLE

// function holabebe(){
//   if(true) {
//     const a = 123;
//   }
//   console.log(a)
// }
// holabebe();



// // LET EXAMPLE

// // Immutable variable
// // Variables created by let and var are mutable:

// let lio = "lio";
// lio = "lio1"
// console.log(lio);


// // JavaScript has first class functions.

// setTimeOut(() => {
//   console.log("SetTimeout called")
// }, 1000);

// setTimeout(() =>
// console.log("setTimeout called!"), 1000);



// // THIS EXAMPLE

// let obj = {
//   name: "lion",
//   apellido: "tolosa",
//     sayLater: function() {
//       console.log(`${this.name + " " + this.apellido}`)
//     }
// }
// obj.sayLater()


// // Ahora imaginemos que registramos el mensaje usando la  setTimeoutfunción.

// let obj = {   //This not Working :(
//   name: "asim",
//   sayLater: function () {
//       setTimeout(function () {  // SyntaxError: Unexpected  - No lo encuentra
//           console.log(`${this.name}`);
//       }, 1000);
//   }
// };
// obj.sayLater();


// let obj = {   //This Working :)
//   name: "asim",
//   sayLater: function () {
//       setTimeout(() => {    // Usamos en vez de function, the fat arrow  =>     (Esto si hace referencia al Obj, que es this.name)
//           console.log(`${this.name}`);
//       }, 1000);
//   }
// };
// obj.sayLater();


// //Object Destructuring

// const holabebe = {name: 'Vanessa', apellido: 'Space', edad: '30'}

// const n = holabebe.name;
// const a = holabebe.apellido;
// console.log(n);
// console.log(a);


// //With destructing we can do so in one line, like so:   ---This cool more

// const {first: f, last: l} = obj;
// console.log(f); // Asim
// console.log(l); // Hussain


// // Array Destructuring

// const arr = ['a', 'b'];
// const [x, y] = arr;
// console.log(y); // a
// console.log(x); // b

// // Destructuración de parámetros de funciones

// function f ({x}) {
//   console.log(x);
// }
// f({x:2})


// function f ({x=2}) {
//   console.log(x);
// }
// f({})




// ////////    -    For & ForEach    -    /////////////////////////


// let array = [1,2,3];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }



// ////////    -    ES5  -  forEach   /////////////////////////


// let array = [1,2,3];
// array.forEach(function (value) {
//   console.log(value)
// });


// // El  for-inciclo está diseñado para iterar sobre las propiedades de un  objeto , así:

// var obj = {a:1, b:2};
//   for(let prop in obj) {
//     console.log(prop);
// }


// //FOR IN 

// //El for-in está diseñado para iterar sobre las propiedades de un  objeto , así:

// let array = [10,20,30];
// for (let prop in array) {
//   console.log(typeof(prop)); // 3 string
// };

// // La  index variable es una  cadena y no un  número , usar for-incon matrices convierte el índice en una cadena.

// let array = [10,20,30];
// for (let index in array) {
//   console.log(typeof(index)); // 3 string
// };


// // FOR OF

// let array = [10,20,30];
// for (let prop in array) {
//   console.log(typeof(prop)); // 3 Numers
// };


// // Resumen
// // El  for–inciclo es para recorrer las propiedades del objeto.
// // El  for–ofciclo es para recorrer los valores en una matriz.
// // for–ofno es solo para arreglos. También funciona en la mayoría de los objetos tipo array, incluidos los nuevos Sety los  Maptipos que trataremos en la próxima conferencia.








// // Map
// // Map is a new data structure introduced in ES6 which lets you map keys to values without the drawbacks of using Objects.

// // Map es una nueva estructura de datos introducida en ES6 que le permite asignar claves a valores sin los inconvenientes de usar Objects.

// // Crear, obtener y configurar
// // Creamos un mapa usando la  newpalabra clave, como tal

// let map = new Map();
// // Luego podemos agregar entradas usando el  setmétodo, como sigue:

// let map = new Map();
// map.set("A",1);
// map.set("B",2);
// map.set("C",3);
// // El método set también es encadenable, así:

// let map = new Map()
//     .set("A",1)
//     .set("B",2)
//     .set("C",3);
// // O podríamos inicializar el  Mapcon una matriz de pares clave-valor, como así:

// let map = new Map([
//     [ "A", 1 ],
//     [ "B", 2 ],
//     [ "C", 3 ]
// ]);
// // Podemos extraer un valor usando el  getmétodo:

// map.get("A");
// // 1
// // Podemos verificar si una clave está presente usando el  hasmétodo:

// map.has("A");
// // true
// // Podemos eliminar entradas usando el  deletemétodo:

// map.delete("A");
// // true
// // Podemos verificar el tamaño (número de entradas) usando la  sizepropiedad:

// map.size
// // 2
// // Podemos vaciar un todo Mapusando el  clearmétodo:

// map.clear()
// // map.size
// // 0


// // EXAMPLE MAP USING VALUES

// let map = new Map([
//   [ "APPLE", 1 ],
//   [ "ORANGE", 2 ],
//   [ "MANGO", 3 ]
// ]);

// for (let key of map.keys()) {
//   console.log(key)
// }

// for (let value of map.values()) {
//   console.log(value)
// }

// for (let entry  of map. entries()) {
//   console.log (entry [0], entry [1])
// }

// for (let [key, value] of map) {
//   console.log(key, value);
// }


// // EXAMPLES

// //1
// let set = new Set(['Lio1', 'Lio2', 'Lio3']);
// for (let entry of set) {
//   console.log(entry)
// }

// //2

// let set = new Set()

// set.add('Lio');
// set.add('Lio1');
// set.add('Lio2');

// for(let entry of set) {
//   console.log(entry)
// }


// // Devolución de llamada
// // Callbacks

// function doAsyncTask(cb) {
//   setTimeout(() => {
//     console.log("Hola bebe");
//     cb();
//   }, 1000)
// }

// doAsyncTask(() => console.log("callback called"))





// // Creando una Promesa
// // Creamos una instancia de una promesa llamando newa la Promiseclase, de esta manera:

// var promise = new Promise((resolve, reject) => {
// });


