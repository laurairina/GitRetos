import {Punto} from "./punto";
import {Triangulo} from "./triangulo";

let punto1= new Punto(10,15);
let punto2= new Punto(4,3);
let punto3= new Punto(13,20);
console.log(punto1.toString());
console.log(punto2.toString());
console.log(punto3.toString());
console.log("La distancia calculada al origen es: "+ punto1.distanciaAlOrigen());
console.log("La distancia entre puntos: "+punto1.calcularDistancia(punto2));

let arrayPuntos=[punto2,punto3];
console.log(punto1.calcularMasCercano(arrayPuntos));

let triangulo= new Triangulo(punto1, punto2, punto3);
console.log("La longitud de los lados del triangulo");
console.log(triangulo.calcularLongitudLados());
