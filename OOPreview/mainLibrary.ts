import {Mobile} from "./mobile";
import { MobileLibrary } from "./mobileLibrary";

let nokia3210= new Mobile("Nokia3210","3210","Nokia",4.2,"Negro",false,7,124);
let iphone3G= new Mobile("Iphone3G","3S","Iphone",4.5,"Gris",false,5,250);
let samsumg= new Mobile("Samsung Galaxy 10","10","Samsung",5,"Rojo",true,12,525);
let lgVelvet= new Mobile("Lg Velvet","Velvet","LG",6.8,"Blanco",true,48,699);

let arrayMobiles=[nokia3210, iphone3G, samsumg, lgVelvet];

let library= new MobileLibrary("Codenotch","Madrid",arrayMobiles);
console.log("\nMostrar lo que tiene en el array");
library.getMobiles().forEach(element => {
    console.log(element.toString());
});