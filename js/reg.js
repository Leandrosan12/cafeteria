const formRegister = document.querySelector('.form-register');
const inputUser = document.querySelector(".form-register input[type='text']")
const inputEmail = document.querySelector(".form-register input[type='email']")
const inputPass = document.querySelector(".form-register input[type='password']")

const nameRegex = /^[a-zA-Z0-9 ]{4,16}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^.{4,12}$/;

document.addEventListener("DOMContentLoaded", () => {
    formRegister.addEventListener("submit", e => {
        e.preventDefault();
        enviarFormulario();
    });
});

inputUser.addEventListener('input', () => {
    validarCampo(nameRegex, inputUser, "¡Se necesita que el usuario tenga de 4 a 16 caracteres!")
});

inputEmail.addEventListener('input', () => {
    validarCampo(emailRegex, inputEmail, "¡El correo debe tener letras, números, puntos, guiones y guion bajo!")
});

inputPass.addEventListener('input', () => {
    validarCampo(passwordRegex, inputPass, "¡La contraseña debe tener de 4 a 12 caracteres!")
});

function validarCampo(regularExpresion, campo, mensaje) {
    const validarCampo = regularExpresion.test(campo.value);
    if (validarCampo) {
        eliminarAlerta(campo.parentElement.parentElement);
        campo.parentElement.classList.remove("error");
        return true;
    } else {
        mostrarAlerta(campo.parentElement.parentElement, mensaje);
        campo.parentElement.classList.add("error");
        return false;
    }
}

function mostrarAlerta(referencia, mensaje) {
    eliminarAlerta(referencia);
    const alertaDiv = document.createElement("div");
    alertaDiv.classList.add("alerta");
    alertaDiv.textContent = mensaje;
    referencia.appendChild(alertaDiv);
}

function eliminarAlerta(referencia) {
    const alerta = referencia.querySelector(".alerta");
    if (alerta) alerta.remove();
}

function enviarFormulario() {
    const camposValidos = validarCampo(nameRegex, inputUser, "¡Se necesita que el usuario tenga de 4 a 16 caracteres!") &&
        validarCampo(emailRegex, inputEmail, "¡El correo debe tener letras, números, puntos, guiones y guion bajo!") &&
        validarCampo(passwordRegex, inputPass, "¡La contraseña debe tener de 4 a 12 caracteres!");

    const alertaError = document.querySelector(".alerta-error");
    const alertaExito = document.querySelector(".alerta-exito");

    if (camposValidos) {
        const nombre = inputUser.value;
        const contraseña = inputPass.value;
        const correo = inputEmail.value;

        guardarRegistro(nombre, contraseña, correo);

        formRegister.reset();
        alertaExito.classList.add("alertaExito");
        alertaError.classList.remove("alertaError");
        setTimeout(() => {
            alertaExito.classList.remove("alertaExito");
        }, 3000);
    } else {
        alertaExito.classList.remove("alertaExito");
        alertaError.classList.add("alertaError");
        setTimeout(() => {
            alertaError.classList.remove("alertaError");
        }, 3000);
    }

}

function guardarRegistro(nombre, contraseña, correo) {
    // Verificar si el navegador soporta localStorage
    if (typeof(Storage) !== "undefined") {
      // Crear un objeto con los datos del registro
      var registro = {
        nombre: nombre,
        contraseña: contraseña,
        correo: correo
      };
  
      // Convertir el objeto a formato JSON
      var registroJSON = JSON.stringify(registro);
  
      // Guardar el registro en localStorage
      localStorage.setItem("registro", registroJSON);
  
      console.log("Registro guardado exitosamente.");
    } else {
      console.log("Lo siento, tu navegador no soporta almacenamiento local.");
    }
  }