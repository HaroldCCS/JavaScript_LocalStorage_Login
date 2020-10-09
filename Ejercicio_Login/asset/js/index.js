const parecidoUsuario = () => {
    let existenciaUsuario = arrayUsuarios.indexOf(usuario.value);
    let existenciaClave = arrayClaves.indexOf(clave.value);
    if ((existenciaUsuario == existenciaClave) && existenciaClave != -1) {
        localStorage.setItem("sesion", usuario.value);
        location.href = "inicio.html";
    } else {
        let a = "<div class='alert alert-danger mt-2' role='alert'>";
        a = a + "El usuario o contraseña es incorrecta</div>";
        error.innerHTML = a;
    }
};

botonIngresar.addEventListener("click", () => {
    comprobarDatos();
    parecidoUsuario();
});
