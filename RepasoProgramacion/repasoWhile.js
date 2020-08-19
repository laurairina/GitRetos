//----------------------------------------
function numeroPar(arrayN) {
    var i = 0;
    var par = false;
    while (i < arrayN.length && !par) {
        if (arrayN[i] % 2 == 0) {
            par = true;
        }
        i++;
    }
    return par;
}
var arrayN = [23, 5, 1, 45, 2];
console.log("\n Pregunta 6: Existe numero par?: " + numeroPar(arrayN));
//------------------------------------------
function empezarM(arrayNom) {
    var nombresM = true;
    var i = 0;
    while (i < arrayNom.length && nombresM) {
        if (!arrayNom[i].includes("M", 0)) {
            nombresM = false;
        }
        i++;
    }
    console.log("\n Pregunta 7: Empiezan n M " + nombresM);
}
var nombres = ["Maria", "Manuel", "Mathias", "Mario"];
empezarM(nombres);
//--------------------------------------------
function sumaCaracteres(caracteres) {
    var suma = 0;
    caracteres.forEach(function (element) {
        suma += element.length;
    });
    return suma;
}
var valores = ["Maria", "Sergio", "Cleopatra", "Luis miguel"];
console.log("\n Pregunta 8: Suma de caracteres " + sumaCaracteres(valores));
//--------------------------------------------
function imparPar(numero) {
    var mensaje;
    if (numero % 2 == 0) {
        mensaje = "El numero es par";
    }
    else {
        mensaje = "El numero es impar";
    }
    console.log(mensaje);
}
//----------------------------------------------------
var array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
var array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var array3 = ["Venezuela", "Veneno", "Voltaje"];
console.log("\n Pregunta 10: ");
imparPar(sumaCaracteres(array1));
imparPar(sumaCaracteres(array2));
imparPar(sumaCaracteres(array3));
