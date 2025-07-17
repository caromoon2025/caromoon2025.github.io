
const principal = document.getElementById ("principal")
const input_nombre = document. getElementById ("nombre")
function crear (){
    let txt_nombre = input_nombre.value
const nuevoDiv = document.createElement('div');
nuevoDiv.textContent = txt_nombre;
document.body.appendChild(nuevoDiv);
}
