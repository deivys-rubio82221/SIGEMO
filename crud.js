document.addEventListener("DOMContentLoaded", () => {
    let users = [];
    const userTable = document.getElementById("userTable").querySelector("tbody");
    const createForm = document.getElementById("createForm");
    const updateFormContainer = document.getElementById("updateFormContainer");
    const updateForm = document.getElementById("updateForm");

    // Crear Usuario
    createForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            nombre: createForm.nombre.value,
            email: createForm.email.value,
            username: createForm.username.value,
            password: createForm.password.value, // Guardar contraseña (puedes mejorar la seguridad aquí)
            rol: createForm.rol.value
        };
        users.push(newUser);
        renderUsers();
        createForm.reset();
    });

    // Renderizar Usuarios
    function renderUsers() {
        userTable.innerHTML = "";
        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nombre}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                <td>${user.rol}</td>
                <td>
                    <button onclick="editUser(${user.id})">Editar</button>
                    <button onclick="deleteUser(${user.id})">Eliminar</button>
                </td>
            `;
            userTable.appendChild(row);
        });
    }

    // Editar Usuario
    window.editUser = (id) => {
        const user = users.find(u => u.id === id);
        document.getElementById("updateId").value = user.id;
        document.getElementById("updateNombre").value = user.nombre;
        document.getElementById("updateEmail").value = user.email;
        document.getElementById("updateUsername").value = user.username;
        document.getElementById("updateRol").value = user.rol;
        updateFormContainer.style.display = "block";
    };

    // Actualizar Usuario
    updateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const id = parseInt(document.getElementById("updateId").value);
        const user = users.find(u => u.id === id);
        user.nombre = document.getElementById("updateNombre").value;
        user.email = document.getElementById("updateEmail").value;
        user.username = document.getElementById("updateUsername").value;
        const password = document.getElementById("updatePassword").value;
        if (password) {
            user.password = password; // Actualizar contraseña solo si se ingresa una nueva
        }
        user.rol = document.getElementById("updateRol").value;
        renderUsers();
        updateFormContainer.style.display = "none";
    });

    // Eliminar Usuario
    window.deleteUser = (id) => {
        users = users.filter(u => u.id !== id);
        renderUsers();
    };
});
