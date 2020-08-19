//---------------------------------
console.log("\nPregunta 3: Numeros impares ");
function numerosImpares(numero) {
    for (var i = 1; i <= numero; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
numerosImpares(15);
//----------------------------------
function arrayInvertido(array) {
    var arrayInv = new Array();
    for (var i = array.length - 1; i >= 0; i--) {
        arrayInv.push(array[i]);
    }
    return arrayInv;
}
var array = [23, 14, 5, 16];
console.log("\nPregunta 4: Array invertido de ");
console.log(array);
console.log(arrayInvertido(array));
//----------------------------------
function coloresArcoiris(colores) {
    var arcoiris = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "violeta"];
    var _loop_1 = function (i) {
        arcoiris.forEach(function (element) {
            if (element == colores[i]) {
                console.log(colores[i]);
            }
        });
    };
    for (var i = 0; i < colores.length; i++) {
        _loop_1(i);
    }
}
var arrayColores = ["morado", "amarillo", "blanco", "rojo", "negro"];
console.log("\nPregunta 5: Colores de arcoiris ");
coloresArcoiris(arrayColores);
