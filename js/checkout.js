
// Exercise 6

function validate(event) {
    event.preventDefault();

    // Get the input fields
    let fName = document.getElementById("fName");
    let fLastN = document.getElementById("fLastN");
    let fEmail = document.getElementById("fEmail");
    let fAddress = document.getElementById("fAddress");
    let fPassword = document.getElementById("fPassword");
    let fPhone = document.getElementById("fPhone");

    // Expresiones regulares
    const expresiones = {
        exName: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, //  Letras y espacios, pueden llevar acentos.
        exLastN: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
        exEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        exAdress: /^[a-zA-Z0-9\s]{3,40}$/, // 
        exPassword: /^.{4,12}$/, // 4 a 12 digitos.
        exPhone: /^\d{7,14}$/ // 7 a 14 numeros.
    };

    // Validar nombre
    if (!expresiones.exName.test(fName.value)) {
        fName.classList.add("is-invalid");
        fName.focus();
        return false;
    } else {
        fName.classList.add("is-valid");
        fName.classList.remove("is-invalid");
    }

    // Validar apellido
    if (!expresiones.exLastN.test(fLastN.value)) {
        fLastN.classList.add("is-invalid");
        fLastN.focus();
        return false;
    } else {
        fLastN.classList.add("is-valid");
        fLastN.classList.remove("is-invalid");
    }

    // Validar email
    if (!expresiones.exEmail.test(fEmail.value)) {
        fEmail.classList.add("is-invalid");
        fEmail.focus();
        return false;
    } else {
        fEmail.classList.add("is-valid");
        fEmail.classList.remove("is-invalid");
    }

    // Validar dirección
    if (!expresiones.exAdress.test(fAddress.value)) {
        fAddress.classList.add("is-invalid");
        fAddress.focus();
        return false;
    } else {
        fAddress.classList.add("is-valid");
        fAddress.classList.remove("is-invalid");
    }

    // Validar contraseña
    if (!expresiones.exPassword.test(fPassword.value)) {
        fPassword.classList.add("is-invalid");
        fPassword.focus();
        return false;
    } else {
        fPassword.classList.add("is-valid");
        fPassword.classList.remove("is-invalid");
    }

    // Validar teléfono
    if (!expresiones.exPhone.test(fPhone.value)) {
        fPhone.classList.add("is-invalid");
        fPhone.focus();
        return false;
    } else {
        fPhone.classList.add("is-valid");
        fPhone.classList.remove("is-invalid");
    }
	if (expresiones.exName.test(fName.value) &&
	expresiones.exLastN.test(fLastN.value) &&
	expresiones.exEmail.test(fEmail.value) &&
	expresiones.exPassword.test(fPassword.value) &&
	expresiones.exPhone.test(fPhone.value)) {
	alert("¡Order placed successfully!");
}

return true;
    
}
