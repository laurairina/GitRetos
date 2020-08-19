import {Mobile} from "./mobile";

let nokia3210= new Mobile("Nokia3210","3210","Nokia",4.2,"Negro",false,7,124);
let iphone3G= new Mobile("Iphone3G","3S","Iphone",4.5,"Gris",false,5,250);
let samsumg= new Mobile("Samsung Galaxy 10","10","Samsung",5,"Rojo",true,12,525);

console.log(nokia3210.toString());
console.log(iphone3G.toString());
console.log(samsumg.toString());

console.log(nokia3210.imprimirCaracteristicas());
console.log(iphone3G.imprimirCaracteristicas());
console.log(samsumg.imprimirCaracteristicas());

console.log("\nMostrar lo que tiene en el array");
let arrayMobiles=[nokia3210, iphone3G, samsumg];
arrayMobiles.forEach(element => {
    console.log(element.imprimirCaracteristicas());
});