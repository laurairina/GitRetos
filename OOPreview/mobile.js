"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, modelo, trademark, sdSize, color, is5G, camaraNumber, price) {
        this.name = name;
        this.modelo = modelo;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.camaraNumber = camaraNumber;
        this.price = price;
    }
    Mobile.prototype.toString = function () {
        return this.name + " " + this.modelo + "  " + this.trademark + " " + this.sdSize + " " + this.color + " " + this.is5G + " " + this.camaraNumber + " " + this.price;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
