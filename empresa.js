document.addEventListener("DOMContentLoaded", () => {
    let empresas = [];
    const empresaTable = document.getElementById("empresaTable").querySelector("tbody");
    const createForm = document.getElementById("createForm");
    const updateFormContainer = document.getElementById("updateFormContainer");
    const updateForm = document.getElementById("updateForm");

    // Crear Empresa
    createForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nuevaEmpresa = {
            id: empresas.length + 1,
            nombre: createForm.nombre.value,
            email: createForm.email.value,
            telefono: createForm.telefono.value
        };
        empresas.push(nuevaEmpresa);
        renderEmpresas();
        createForm.reset();
    });

    // Renderizar Empresas
    function renderEmpresas() {
        empresaTable.innerHTML = "";
        empresas.forEach(empresa => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${empresa.id}</td>
                <td>${empresa.nombre}</td>
                <td>${empresa.email}</td>
                <td>${empresa.telefono}</td>
                <td>
                    <button onclick="editEmpresa(${empresa.id})">Editar</button>
                    <button onclick="deleteEmpresa(${empresa.id})">Eliminar</button>
                </td>
            `;
            empresaTable.appendChild(row);
        });
    }

    // Editar Empresa
    window.editEmpresa = (id) => {
        const empresa = empresas.find(e => e.id === id);
        document.getElementById("updateId").value = empresa.id;
        document.getElementById("updateNombre").value = empresa.nombre;
        document.getElementById("updateEmail").value = empresa.email;
        document.getElementById("updateTelefono").value = empresa.telefono;
        updateFormContainer.style.display = "block";
    };

    // Actualizar Empresa
    updateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("updateId").value);
        const empresa = empresas.find(e => e.id === id);
        empresa.nombre = document.getElementById("updateNombre").value;
        empresa.email = document.getElementById("updateEmail").value;
        empresa.telefono = document.getElementById("updateTelefono").value;
        renderEmpresas();
        updateFormContainer.style.display = "none";
    });

    // Eliminar Empresa
    window.deleteEmpresa = (id) => {
        empresas = empresas.filter(e => e.id !== id);
        renderEmpresas();
    };
});
