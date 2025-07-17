// Selección por ID
const titulo = document.getElementById('miTitulo');
console.log (titulo)

// Selección por clase
const elementos = document.getElementsByClassName('miClase');
console.log (elementos)

// Selección por selector CSS
const parrafo = document.querySelector('p');
console.log (parrafo)

const todosLosParrafos = document.querySelectorAll('p');
console.log (todosLosParrafos)

function cambiar (){
    const caja=document.querySelector ('.miClase');
    caja.style.backgroundcolor = 'blue';
    caja.style.color = 'red'
}

function original(){
    titulo.textContent="nuevo titulo javascript"
    parrafo.innerHTML= "texto del parrafo <b> principal</b>"

    function original (){
        titulo.textContent="titulo principal"
    parrafo.innerHTML= "párrafo principal"}
}

function enlace (){
    const enlace=document.querySelector('a');
    enlace.setAttribute ('href', 'https://facebook.com');
}

function cambiotitulo (){
    titulo.style.backgroundcolor ='red'
    titulo.style.fontSize = "50px"
}