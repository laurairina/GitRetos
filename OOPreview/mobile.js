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
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    Mobile.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Mobile.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.setCamaraNumber = function (camaraNumber) {
        this.camaraNumber = camaraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModelo = function () {
        return this.modelo;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getCamaraNumber = function () {
        return this.camaraNumber;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.imprimirCaracteristicas = function () {
        return "\n\tThe characteristics of the mobile name are: \n" + "\t Name: " + this.name + "\n\t Model: " + this.modelo + "\n\t Trademark: " + this.trademark + "\n\t SD Size (GB): " + this.sdSize + "\n\t Color: " + this.color + "\n\t Is 5G?: " + this.is5G + "\n\t Number of Cameras: " + this.camaraNumber;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
