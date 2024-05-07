console.log("Colores");

let botonAmarillo = document.querySelector("#amarillo");
let botonRojo = document.querySelector('#Rojo');
let botonAzul = document.querySelector('#Azul');
let botonGris = document.querySelector('#gris');
let botonSinColor = document.querySelector('#sinColor');
//CREAMOS LA ETIQUETA SECTION
// let section = document.createElement("section");
let body = document.querySelector("body")
let cuadrito = document.querySelector("#cuadrito")
let cuadrobotonAmarillo = document.querySelector("#cuadroAmarillo");
let cuadrobotonRojo = document.querySelector('#cuadroRojo');
let cuadrobotonVerde = document.querySelector('#cuadroAzul');
let cuadorbotonNaranja = document.querySelector('#cuadroGris');
let cuadrobotonSinColor = document.querySelector('#cuadroSinColor');
//AGRERGAR EL SECTION AL BODY   
// body.append(section);


cuadrobotonAmarillo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'yellow';
    }
)
cuadrobotonRojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'red';
    }
)
cuadrobotonVerde.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'green';
    }
)
cuadorbotonNaranja.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'orange';
    }
)
cuadrobotonSinColor.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'white';
    }
)
cuadrobotonVerde.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        cuadrito.style.backgroundColor = 'green';
    }
)

botonAmarillo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color amarillo");
        document.body.style.backgroundColor = 'yellow';
    }
)
botonRojo.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Rojo");
        document.body.style.backgroundColor = 'red';
    }
)
botonAzul.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Azul");
        document.body.style.backgroundColor = 'blue';
    }
)
botonGris.addEventListener("click", 
    function mensaje(){
        console.log("Buscando el color Gris");
        document.body.style.backgroundColor = 'gray';
    }
)
botonSinColor.addEventListener("click", 
    function mensaje(){
        console.log("Sin Color");
        document.body.style.backgroundColor = 'white';
    }
)



console.log(cuadrito);