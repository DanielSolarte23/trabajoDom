let boton = document.querySelector('#boton');

boton.addEventListener('click',
    function (){
        let inputT = document.querySelector('input').value.toLowerCase();
        let section = document.querySelector('#Rec');
        section.innerText = `Hola ${inputT}`
    }
)





