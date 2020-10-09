if (localStorage.getItem("sesion") != null){
    location.href = "inicio.html";
}

if (localStorage.getItem("usuarios") != null) {
    var arrayUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    var arrayClaves = JSON.parse(localStorage.getItem("claves"));
} else {
    var arrayUsuarios = [];
    var arrayClaves = [];
}

const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const botonIngresar = document.getElementById("botonIngresar");
const error = document.getElementById("error");
const errorUsuario = document.getElementById("errorUsuario");
const errorClave = document.getElementById("errorClave");

const comprobarDatos = () => {
    let error = false;
    if (usuario.value == "") {
        let a = "<div class='alert alert-warning' role='alert'>";
        a = a + "Por favor, ingrese un nuevo usuario </div>";
        errorUsuario.innerHTML = a;
        error = true;
    }
    if (clave.value == "") {
        let a = "<div class='alert alert-warning' role='alert'>";
        a = a + "Por favor, ingrese una nuevo clave </div>";
        errorclave.innerHTML = a;
        error = true;
    }
    return error;
};

usuario.addEventListener("click", () => {
    errorUsuario.innerHTML = "";
});
clave.addEventListener("click", () => {
    errorclave.innerHTML = "";
});