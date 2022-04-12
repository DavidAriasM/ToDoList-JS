const inputTarea = document.getElementById('inputTarea');
let imgVacio = document.getElementById('img_vacio');
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
    console.log(localStorage.getItem('dataFormulario').length);
    if (localStorage.getItem('dataFormulario')) {

        let lista = document.querySelector('#lista');
        lista.innerHTML = "";
        JSON.parse(localStorage.getItem('dataFormulario')).forEach(data => {
            lista.innerHTML += `
            <div class="tarea_contenedor"><div class="tarea">${ data.tarea }</div><button class="btnBorrar" onclick="borrarFila(${ data.id })">X</button></div>
        `
        });

    }
    if (localStorage.getItem('dataFormulario').length > 2) {
        imgVacio.style.display = 'none';
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
    if (localStorage.getItem('dataFormulario').length === 2) {
        imgVacio.style.display = 'flex';
    }
    mostrarData();
}

mostrarData();