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
    for (var i = 0; i < colores.length; i++) {
        var mensaje = "";
        var c = 0;
        var encontro = void 0;
        while (c < arcoiris.length && !encontro) {
            if (arcoiris[c] == colores[i]) {
                encontro = true;
                mensaje = "El color " + colores[i] + " esta en el arcoiris";
            }
            else {
                mensaje = "El color " + colores[i] + " no está en el arcoiris";
            }
            c++;
        }
        console.log(mensaje);
    }
}
var arrayColores = ["morado", "amarillo", "blanco", "rojo", "negro"];
console.log("\nPregunta 5: Colores de arcoiris \n");
coloresArcoiris(arrayColores);
