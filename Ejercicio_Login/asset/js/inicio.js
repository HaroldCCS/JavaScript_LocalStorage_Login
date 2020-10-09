const botonCerrar = document.getElementById("botonCerrar");
const saludoUsuario = document.getElementById("saludoUsuario");

saludoUsuario.textContent += " " + localStorage.getItem("sesion");

botonCerrar.addEventListener("click", () => {
    localStorage.removeItem("sesion");
    location.href = "index.html";
});

//------------------------Hobbies  -------------------------------//
const listaHobbies = document.getElementById("listaHobbies");
const selectHobbie = document.getElementById("selectHobbie");
const botonBorrar = document.getElementById("botonBorrar");

if (localStorage.getItem("lhobbies") != null) {
    var arrayHobbies = JSON.parse(localStorage.getItem("lhobbies"));
} else {
    var arrayHobbies = [];
}

const llenarSelect = () => {
    let hobbies = [
        "Ver series",
        "Hacer tareas",
        "Jugar videojuegos",
        "Romper ventanas",
        "Programar",
        "Hacer ejercicio",
    ];

    hobbies.forEach((hobie) => {
        let opcion = document.createElement("option");
        opcion.textContent = hobie;
        selectHobbie.appendChild(opcion);
    });
};

const guardarStorage = () => {
    hobbiesJSON = JSON.stringify(arrayHobbies);
    localStorage.setItem("lhobbies", hobbiesJSON);
};

const imprimirArray = () => {
    listaHobbies.innerHTML = arrayHobbies;
};

selectHobbie.addEventListener("change", () => {
    arrayHobbies.push(selectHobbie.value);
    guardarStorage();
    imprimirArray();
});

botonBorrar.addEventListener("click", () => {
    arrayHobbies.pop();
    guardarStorage();
    imprimirArray();
});

llenarSelect();
imprimirArray();
