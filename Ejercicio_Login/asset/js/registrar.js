const guardarStorage = () => {
    let usuariosJSON = JSON.stringify(arrayUsuarios);
    let clavesJSON = JSON.stringify(arrayClaves);
    localStorage.setItem("usuarios", usuariosJSON);
    localStorage.setItem("claves", clavesJSON);
};

const parecidoUsuario = () => {
    let verificarExistencia = arrayUsuarios.indexOf(usuario.value);
    if (verificarExistencia != -1) {
        let a = "<div class='alert alert-danger' role='alert'>";
        a = a + "El usuario ya se encuentra registrado</div>";
        errorUsuario.innerHTML = a;
        return true;
    } else {
        errorUsuario.innerHTML = "";
    }
};

usuario.addEventListener("keyup", () => {
    parecidoUsuario();
});


botonIngresar.addEventListener("click", () => {
    let buscarError = comprobarDatos();
    let buscarCoincidencias = parecidoUsuario();
    if (!buscarError && !buscarCoincidencias) {
        arrayUsuarios.push(usuario.value);
        arrayClaves.push(clave.value);
        guardarStorage();
        location.href = "index.html";
    }
});
