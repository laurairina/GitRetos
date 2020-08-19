"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.setTotalPrice = function (totalPrice) {
        this.totalPrice = totalPrice;
    };
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var precioTotal = 0;
        for (var index = 0; index < this.mobiles.length; index++) {
            precioTotal += this.mobiles[index].getPrice();
        }
        return precioTotal;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("\n\t \"This all my mobile: \"");
        this.getMobiles().forEach(function (element) {
            console.log(element.imprimirCaracteristicas());
        });
        console.log("\n\t \"Price overall: " + this.totalPrice + "\"");
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
