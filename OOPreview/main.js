"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.Mobile("Nokia3210", "3210", "Nokia", 4.2, "Negro", false, 7, 124);
var iphone3G = new mobile_1.Mobile("Iphone3G", "3S", "Iphone", 4.5, "Gris", false, 5, 250);
var samsumg = new mobile_1.Mobile("Samsung Galaxy 10", "10", "Samsung", 5, "Rojo", true, 12, 525);
console.log(nokia3210.toString());
console.log(iphone3G.toString());
console.log(samsumg.toString());
