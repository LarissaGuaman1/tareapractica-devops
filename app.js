function esPar(numero) {
    return numero % 2 === 0;
}

const numero = 8;

if (esPar(numero)) {
    console.log(`${numero} es par`);
} else {
    console.log(`${numero} es impar`);
}

module.exports = esPar;