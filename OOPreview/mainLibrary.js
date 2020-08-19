"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var mobileLibrary_1 = require("./mobileLibrary");
var nokia3210 = new mobile_1.Mobile("Nokia3210", "3210", "Nokia", 4.2, "Negro", false, 7, 124);
var iphone3G = new mobile_1.Mobile("Iphone3G", "3S", "Iphone", 4.5, "Gris", false, 5, 250);
var samsumg = new mobile_1.Mobile("Samsung Galaxy 10", "10", "Samsung", 5, "Rojo", true, 12, 525);
var lgVelvet = new mobile_1.Mobile("Lg Velvet", "Velvet", "LG", 6.8, "Blanco", true, 48, 699);
var arrayMobiles = [nokia3210, iphone3G, samsumg, lgVelvet];
var library = new mobileLibrary_1.MobileLibrary("Codenotch", "Madrid", arrayMobiles);
console.log("\nMostrar lo que tiene en el array");
library.getMobiles().forEach(function (element) {
    console.log(element.toString());
});
