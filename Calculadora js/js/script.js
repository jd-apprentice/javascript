// Numeros

let val1 = 0; // primer numero
let val2 = ""; // operador
let val3 = 0; // segundo numero
let resultado = 0;
let count = 0;

const getZero = document.querySelector('.zero').addEventListener("click", zero);
const getOne = document.querySelector('.uno').addEventListener("click", uno);
const getTwo = document.querySelector('.dos').addEventListener("click", dos);
const getThree = document.querySelector('.tres').addEventListener("click", tres);
const getFour = document.querySelector('.cuatro').addEventListener("click", cuatro);
const getFive = document.querySelector('.cinco').addEventListener("click", cinco);
const getSix = document.querySelector('.seis').addEventListener("click", seis);
const getSeven = document.querySelector('.siete').addEventListener("click", siete);
const getEight = document.querySelector('.ocho').addEventListener("click", ocho);
const getNine = document.querySelector('.nueve').addEventListener("click", nueve);
const getC = document.querySelector('.c').addEventListener("click", borrar);
const getPlus = document.querySelector('.mas').addEventListener("click", mas);
const getMinus = document.querySelector('.menos').addEventListener("click", menos);
const getMulti = document.querySelector('.por').addEventListener("click", por);
const getDivi = document.querySelector('.dividir').addEventListener("click", dividir);
const getModu = document.querySelector('.modulo').addEventListener("click", modulo);
let displayResult = document.querySelector('.igual').addEventListener("click", operaciones);
let result = document.querySelector('#resultado');

// Operadores

function mas() {
    val1 = result.value;
    if (count > 1) {
        console.log('operacion no valida');
    }
    else {
        count++;
        val2 = "+";
        result.value = "";
    }

}

function menos() {
    val1 = result.value
    if (count > 0) {
        console.log('operacion no valida')
    }
    else {
        count++;
        val2 = "-";
        result.value = "";
    }

}

function por() {
    val1 = result.value
    if (count > 0) {
        console.log('operacion no valida')
    }
    else {
        count++;
        val2 = "*";
        result.value = "";
    }

}

function dividir() {
    val1 = result.value
    if (count > 0) {
        console.log('operacion no valida')
    }
    else {
        count++;
        val2 = "/";
        result.value = "";
    }

}

function modulo() {
    val1 = result.value
    if (count > 0) {
        console.log('operacion no valida')
    }
    else {
        count++;
        val2 = "%";
        result.value = "";
    }
}

// Numeros

function zero() {
    result.value += 0;
}

function uno() {
    result.value += 1;
}

function dos() {
    result.value += 2;
}

function tres() {
    result.value += 3;
}

function cuatro() {
    result.value += 4;
}

function cinco() {
    result.value += 5;
}

function seis() {
    result.value += 6;
}

function siete() {
    result.value += 7;
}

function ocho() {
    result.value += 8;
}

function nueve() {
    result.value += 9;
}

// Limpiar pantalla

function borrar() {
    result.value = "";
    count = 0;
}

// Operaciones

function operaciones() {

    if (val2 === "+") {
        val3 = result.value;
        resultado = parseInt(val1) + parseInt(val3);
        result.value = resultado;
    }

    else if (val2 === "-") {
        val3 = result.value;
        resultado = parseInt(val1) - parseInt(val3);
        result.value = resultado;
    }

    else if (val2 === "/") {
        val3 = result.value;
        resultado = parseInt(val1) / parseInt(val3);
        result.value = resultado;
    }

    else if (val2 === "*") {
        val3 = result.value;
        resultado = parseInt(val1) * parseInt(val3);
        result.value = resultado;
    }

    else if (val2 === "%") {
        val3 = result.value;
        resultado = parseInt(val1) % parseInt(val3);
        result.value = resultado;
    }
}