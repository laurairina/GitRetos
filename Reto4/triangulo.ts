
import {Punto} from "./punto"
export class Triangulo{
    private vertice1:Punto;
    private vertice2:Punto;
    private vertice3:Punto;

    public constructor(v1:Punto, v2:Punto, v3:Punto){
        this.vertice1=v1;
        this.vertice2=v2;
        this.vertice3=v3;
    }

    public calcularLongitudLados():number[]{
        let longitudes:number[]= new Array();
          longitudes[0]= this.vertice1.calcularDistancia(this.vertice2);
          longitudes[1]= this.vertice1.calcularDistancia(this.vertice3); 
          longitudes[2]= this.vertice2.calcularDistancia(this.vertice3);

        return longitudes;
    }
}