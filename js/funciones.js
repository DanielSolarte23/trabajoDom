// function saludar (name){
//      return `Hola  ${name}sita`;
// }

// let sap = saludar("Jhon");
// console.log(sap);

//FUNCION ANONIMA SALUDAR

// let saludaraJuanita = function(nombre){
//     return `Hola ${nombre} como estas?`
// }
// console.log(saludaraJuanita("Juanita"));

// //FUNCION ANONIMA SUMA


// let suma = function (num1, num2) {
//     return `La suma de los numeros es ${num1 + num2}`
// }
// console.log(suma(5, 5));


// const daniel =(a,b) =>{

// }







// function saludo(){
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     console.log(4);
// }

// saludo();


// function suma  (){
//     let num1 = 5;
//     let num2 = 10;
//     let resultado = (num1 + num2);
//     console.log(`la suma es ${resultado}`);
// }

// suma();

// function bienvenido (){
//     console.log("Hola, eres Bienvenido al ADSO");

//     return "Hola desde consola"; 
// }

// bienvenido();
// const bienve = bienvenido();

// console.log(bienve);

// function suma2 (a, b){
//     return a + b
// }

// let sum = suma2(5,8);
// console.log(sum);

// crar una funcion que me diga si un numero es primo o no


// const numeroPrimo = function (num){
//     if (num % 2 == 0 && num % 1 == 0){
//         return `El numero ${num} es primo`
//     }else{
//         return `El numero ${num} no es primo`
//     }
// }

// console.log(numeroPrimo(prompt("Ingrese un numero")))

//ESCRIBE UNA FUNCION QUE IMPRIMA LA TABLA DE MULTIPLICAR DEL NUMERO DADO

//primera forma

// function Multiplicar(numero) {
//     let por = [];
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       por.push(resultado);
//     }
//     return por;
//   }

//   let numero = parseInt(prompt("Ingresa un numero"));
//   let tabla = Multiplicar(numero);
//   tabla.forEach(function(resultado) {
//     console.log(resultado);
//   });


// //Segunda Forma

// function Multiplicar(numero1){
//     let poor = [1,2,3,4,5,6,7,8,9,10];

//     console.log(numero1 * poor[0]);
//     console.log(numero1 * poor[1]);
//     console.log(numero1 * poor[2]);
//     console.log(numero1 * poor[3]);
//     console.log(numero1 * poor[4]);
//     console.log(numero1 * poor[5]);
//     console.log(numero1 * poor[6]);
//     console.log(numero1 * poor[7]);
//     console.log(numero1 * poor[8]);
//     console.log(numero1 * poor[9]);
// }

// let mult = Multiplicar(5);

//EJERCICIO 4 

/* function imprimirNumerosPares(num) {
  for (let i = 2; i <= num; i += 2) {
    console.log(i);
  }
}
imprimirNumerosPares(50); */

// EJERCICIO 3

/* let promedio = function (n1, n2){
  return(n1 + n2) / 2;
}
console.log(promedio(10,5)); */

//EJERCICIO 6

// const numeroMayor = function (n1, n2 , n3){
//   if (n1 > n2 && n2 > n3) {
//         return `El numero ${n1} es mayor el ${n2} es el medio y ${n3} el menor`;
//     } else if (n1 > n3 && n3 > n2) {
//         return `El numero ${n1} es mayor el ${n3} es el medio y ${n2} el menor`;
//     } else if (n2 > n1 && n1 > n3) {
//         return `El numero ${n2} es mayor el ${n1} es el medio y ${n3} el menor`;
//     } else if (n2 > n3 && n3 > n1) {
//         return `El numero ${n2} es mayor el ${n3} es el medio y ${n1} el menor`;
//     } else if (n3 > n1 && n1 > n2) {
//         return `El numero ${n3} es mayor el ${n1} es el medio y ${n2} el menor`;
//     } else if (n3 > n2 && n2 > n1) {
//         return `El numero ${n3} es mayor el ${n2} es el medio y ${n1} el menor`;
//     }
// }

// console.log(numeroMayor(15,20,30));

//EJERCICIO 7

/* 
function generar_caracteres (numero, caracter){
    let i = 0;
    while (i <= numero){
      numero +=caracter
    }
}

let gen = generar_caracteres(5, "n");
console.log(gen); */

//EJERCICIO 8

/* function sumarNumero (numeroo){
  let i = 1;
  let suma = 0;

  while (i <= numeroo){
      suma += i;
      i++;

      return `La suma de los números enteros positivos desde 1 hasta ${numeroo} es: ${suma}`
  }
}

let sum = sumarNumero(20);
console.log(sum);
 */
// EJERCICIO 9 

/* function pedirNumeroMayorQue100() {
  let numero;
  do {
      numero = prompt("Por favor, ingrese un número mayor que 100:", "");
  } while (numero <= 100 && numero !== null);

  if (numero !== null) {
      console.log("Número ingresado: " + numero);
  } else {
      console.log("Se canceló la entrada de datos.");
  }
}
 */
// Llamamos a la función para que se ejecute
pedirNumeroMayorQue100();

// EJERCICIO 10

/* function generarNumeroAleatorioHasta7() {
  let numero;
  do {
      numero = Math.floor(Math.random() * 10) + 1;
      console.log("Número generado: " + numero);
  } while (numero !== 7);
  
  console.log("Se obtuvo un 7!");
} */

// Llamamos a la función para que se ejecute
/* generarNumeroAleatorioHasta7(); */

// EJER 11

/* function imprimirNumerosPares() {
  for (let i = 0; i <= 20; i++) {
      if (i % 2 === 0) {
          console.log(i);
      }
  }
}

// Llamamos a la función para que se ejecute
imprimirNumerosPares(); */

// EJERCICIO 12
// function pedirNumeroEntre1y5() {
//   let numero;
//   do {
//       numero = parseInt(prompt("Por favor, ingrese un número entre 1 y 5:", ""));
//   } while (numero < 1 || numero > 5 || isNaN(numero));

//   console.log("Número ingresado: " + numero);
// }

// // Llamamos a la función para que se ejecute
// pedirNumeroEntre1y5();


// EJERCICIO 13
/* function fibonacci() {
  let a = 0, b = 1, temp;
  console.log(a); // Imprimir el primer número 0
  console.log(b); // Imprimir el segundo número 1
  for (let i = 2; i < 10; i++) {
      temp = a + b;
      console.log(temp);
      a = b;
      b = temp;
  }
}

// Llamamos a la función para que se ejecute
fibonacci(); */

// EJERCICIO 14
function pedirContraseña() {
  let contraseña;
  do {
    contraseña = prompt("Por favor, ingrese su contraseña:");
  } while (contraseña !== "contraseña123");

  console.log("Contraseña correcta. ¡Bienvenido!");
}

// Llamamos a la función para que se ejecute
pedirContraseña();


// EJERCICIO 15
function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function imprimirPrimos() {
  let contador = 0;
  let numero = 2;
  while (contador < 5) {
    if (esPrimo(numero)) {
      console.log(numero);
      contador++;
    }
    numero++;
  }
}

// Llamamos a la función para que se ejecute
imprimirPrimos();



// EJERCICIO 16
function pedirNumeroPositivo() {
  let numero;
  do {
    numero = parseInt(prompt("Por favor, ingrese un número positivo:"));
    if (isNaN(numero) || numero <= 0) {
      console.log("Error: Debe ingresar un número positivo.");
    }
  } while (isNaN(numero) || numero <= 0);

  console.log("Número ingresado: " + numero);
}

// Llamamos a la función para que se ejecute
pedirNumeroPositivo();

// EJERCICIO 18
function imprimirDescendente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// Llamamos a la función para que se ejecute
imprimirDescendente();

// EJERCICIO 17
function imprimirDescendente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// Llamamos a la función para que se ejecute
imprimirDescendente();
// EJERCICIO 18 
function calcularFactorial(numero) {
  let factorial = 1;
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  return factorial;
}

// Ejemplo de uso
let numero = 5; // Puedes cambiar este valor al número que desees calcular
let resultado = calcularFactorial(numero);
console.log("El factorial de " + numero + " es: " + resultado);

// EJERCICIO 19
function esPrimo(numero) {
  if (numero < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

function imprimirPrimos() {
  let cantidad = 0;
  let numero = 2;
  while (cantidad < 5) {
    if (esPrimo(numero)) {
      console.log(numero);
      cantidad++;
    }
    numero++;
  }
}

// Llamamos a la función para que se ejecute
imprimirPrimos();

// EJERCICIO 20
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}

// Llamar a la función para imprimir la secuencia
fizzBuzz();

// EJERCICIO 21
function imprimirDescendente() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

// Llamar a la función para imprimir los números en orden descendente
imprimirDescendente();

// EJERCICIO 22
function fibonacci() {
  let a = 0, b = 1;
  console.log(a); // Primer término de Fibonacci
  console.log(b); // Segundo término de Fibonacci
  for (let i = 2; i < 10; i++) {
    let c = a + b;
    console.log(c); // Imprimir el término actual de Fibonacci
    a = b;
    b = c;
  }
}

// Llamar a la función para imprimir los primeros 10 términos de Fibonacci
fibonacci();

