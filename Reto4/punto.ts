export class Punto{
   private x:number;
   private y:number;

   constructor(x:number, y:number){
        this.x=x;
        this.y=y;
   }

   public setX(x:number){
       this.x=x;
   }

   public setY(y:number){
       this.y=y;
   }

   public getX():number{
       return this.x;
   }

   public getY():number{
       return this.y;
   }

   public toString():string{
       return "\"("+this.x+","+this.y+")\"";
   }

   public distanciaAlOrigen():number{
       let distanciaOrigen:number=0;
        distanciaOrigen= Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));

       return distanciaOrigen;
   }

   public calcularDistancia(otroPunto:Punto):number{
       let distancia:number=0;
       distancia=Math.sqrt((Math.pow((this.x - otroPunto.getX()),2))+(Math.pow((this.y - otroPunto.getY()),2)));
       return distancia;
   }
 
   public calcularCuadrante():number{
      let cuadrante:number;
        if(this.x==0 && this.y==0){
            cuadrante=0;
        }
        else if(this.x>0 && this.y>0){
            cuadrante=1;
        }
        else if(this.x<0 && this.y>0){
            cuadrante=2;
        }
        else if(this.x>0 && this.y<0){
            cuadrante=4;
        }
        else{
            cuadrante=3;
        }

      return cuadrante;
   } 
   
   public calcularMasCercano(puntos:Punto[]):Punto{
      let puntoMenor:Punto;
      let menor:number=999999;
      for(let i=0; i<puntos.length;i++){
          let resultado=this.calcularDistancia(puntos[i]);
          console.log(resultado+"  "+puntos.length);
          if(menor>resultado){
               menor=resultado;
               puntoMenor=puntos[i];
          }
      }     

       return puntoMenor;
   }
}