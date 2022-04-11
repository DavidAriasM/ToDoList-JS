const inputTarea = document.getElementById('inputTarea');

let dataFormulario = [];
let contadorId = 0;
const ingresarTarea = e => {
    let dataFormulario = JSON.parse(localStorage.getItem('dataFormulario')) || [];
    contadorId += 1;
    dataFormulario.push({

        id: contadorId,
        tarea: inputTarea.value
    })
    localStorage.setItem('dataFormulario', JSON.stringify(dataFormulario));
    console.log(localStorage.getItem('dataFormulario'));
    mostrarData();
    e.preventDefault();
    inputTarea.value = ''
}

function mostrarData() {
    console.log(localStorage.getItem('dataFormulario'));
    if (localStorage.getItem('dataFormulario')) {
        let lista = document.querySelector('ul');
        lista.innerHTML = "";
        JSON.parse(localStorage.getItem('dataFormulario')).forEach(data => {
            lista.innerHTML += `
            <li class="tarea">${ data.tarea } <button class="btnBorrar" onclick="borrarFila(${ data.id })">X</button></li>
        `
        });
    }
}

function borrarFila(id) {
    let dataFormulario = JSON.parse(localStorage.getItem('dataFormulario'));
    for (let i = 0; i < dataFormulario.length; i++) {

        if (id === dataFormulario[i].id) {
            let indice = dataFormulario.findIndex(dataFormulario => dataFormulario.id === id);
            dataFormulario.splice(indice, 1);
            localStorage.setItem('dataFormulario', JSON.stringify(dataFormulario));
        }
    }
    mostrarData();
}

mostrarData();