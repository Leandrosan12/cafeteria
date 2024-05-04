function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    var nombreError = document.getElementById("nombreError");
    var correoError = document.getElementById("correoError");
    var contrasenaError = document.getElementById("contrasenaError");

    // Resetear errores
    nombreError.textContent = "";
    correoError.textContent = "";
    contrasenaError.textContent = "";

    // Validación de nombre
    if (nombre === "") {
        nombreError.textContent = "Por favor, ingrese su nombre.";
        return false;
    }

    // Validación de correo electrónico
    if (correo === "") {
        correoError.textContent = "Por favor, ingrese su correo electrónico.";
        return false;
    }

    // Validación de contraseña
    if (contrasena === "") {
        contrasenaError.textContent = "Por favor, ingrese su contraseña.";
        return false;
    }

    // Aquí puedes agregar más validaciones si es necesario

    // Si todo está correcto, redireccionar al usuario a index.html
    window.location.href = "index.html";
    return true;
}
