// Cambiar color de ubicación seleccionada
function seleccionarUbicacion(id) {
    const ubicaciones = document.querySelectorAll('.ubicacion-btn');
    ubicaciones.forEach((btn) => {
        btn.classList.remove('selected');
    });
    document.getElementById(id).classList.add('selected');
}

// Asignar guardia a las asignaciones
function asignarGuardia(tipo) {
    let guardiasSeleccionados = [];
    const checkboxes = document.querySelectorAll('#vigilantes input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            guardiasSeleccionados.push(checkbox.value);
        }
    });

    if (guardiasSeleccionados.length > 0) {
        const actualAsignacion = document.getElementById(tipo).innerText;
        if (actualAsignacion === 'Sin Asignar') {
            document.getElementById(tipo).innerText = guardiasSeleccionados.join(', ');
        } else {
            document.getElementById(tipo).innerText += ', ' + guardiasSeleccionados.join(', ');
        }
    }
}

// Eliminar guardia de las asignaciones
function eliminarGuardia(tipo) {
    document.getElementById(tipo).innerText = 'Sin Asignar';
}

// Seleccionar todos los guardias
function seleccionarTodos() {
    const checkboxes = document.querySelectorAll('#vigilantes input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = true;
    });
}

// Limpiar selección de guardias
function limpiarSeleccion() {
    const checkboxes = document.querySelectorAll('#vigilantes input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}
