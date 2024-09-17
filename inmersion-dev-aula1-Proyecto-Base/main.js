let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let botonLimpiar = document.getElementById('limpiar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor a 8");
        return;
    }

    let password = ''
    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

        password+=caracterAleatorio;
    }

    contrasena.value = password;

    validar(password);
    
}



function esContrasenaSegura(contrasena) {
    const tieneMayusculas = /[A-Z]/.test(contrasena);
    const tieneMinusculas = /[a-z]/.test(contrasena);
    const tieneNumeros = /[0-9]/.test(contrasena);
    const tieneCaracteresEspeciales = /[!@#$%^&*()]/.test(contrasena);

    return {
        esSegura: tieneMayusculas && tieneMinusculas && tieneNumeros && tieneCaracteresEspeciales,
        tieneMayusculas,
        tieneMinusculas,
        tieneNumeros,
        tieneCaracteresEspeciales
    };
}

function validar(password) {
    const resultadoValidacion = esContrasenaSegura(password);

    if (resultadoValidacion.esSegura) {
        alert("La contraseña es fuerte.");
    } else {
        let mensaje = "La contraseña generada no es segura. Necesita:";
        if (!resultadoValidacion.tieneMayusculas) {
            mensaje += "\n- Al menos una letra mayúscula.";
        }
        if (!resultadoValidacion.tieneMinusculas) {
            mensaje += "\n- Al menos una letra minúscula.";
        }
        if (!resultadoValidacion.tieneNumeros) {
            mensaje += "\n- Al menos un número.";
        }
        if (!resultadoValidacion.tieneCaracteresEspeciales) {
            mensaje += "\n- Al menos un carácter especial.";
        }
        alert(mensaje);
    }
}

function limpiar() {
    contrasena.value = ''; 
    cantidad.value = '';   
}


boton.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);