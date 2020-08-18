"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(v1, v2, v3) {
        this.vertice1 = v1;
        this.vertice2 = v2;
        this.vertice3 = v3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudes = new Array();
        longitudes[0] = this.vertice1.calcularDistancia(this.vertice2);
        longitudes[1] = this.vertice1.calcularDistancia(this.vertice3);
        longitudes[2] = this.vertice2.calcularDistancia(this.vertice3);
        return longitudes;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
