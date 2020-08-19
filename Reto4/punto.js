"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.setX = function (x) {
        this.x = x;
    };
    Punto.prototype.setY = function (y) {
        this.y = y;
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.getY = function () {
        return this.y;
    };
    Punto.prototype.toString = function () {
        return "\"(" + this.x + "," + this.y + ")\"";
    };
    Punto.prototype.distanciaAlOrigen = function () {
        var distanciaOrigen = 0;
        distanciaOrigen = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distanciaOrigen;
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distancia = 0;
        distancia = Math.sqrt((Math.pow((this.x - otroPunto.getX()), 2)) + (Math.pow((this.y - otroPunto.getY()), 2)));
        return distancia;
    };
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante;
        if (this.x == 0 && this.y == 0) {
            cuadrante = 0;
        }
        else if (this.x > 0 && this.y > 0) {
            cuadrante = 1;
        }
        else if (this.x < 0 && this.y > 0) {
            cuadrante = 2;
        }
        else if (this.x > 0 && this.y < 0) {
            cuadrante = 4;
        }
        else {
            cuadrante = 3;
        }
        return cuadrante;
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var puntoMenor;
        var menor = Number.MAX_VALUE;
        for (var i = 0; i < puntos.length; i++) {
            var resultado = this.calcularDistancia(puntos[i]);
            console.log(resultado + "  " + puntos[i].toString());
            if (menor > resultado) {
                menor = resultado;
                puntoMenor = puntos[i];
            }
        }
        return puntoMenor;
    };
    return Punto;
}());
exports.Punto = Punto;
