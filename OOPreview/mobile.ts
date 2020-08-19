export class Mobile{
    public name:string;
    public modelo:string;
    public trademark:string;
    public sdSize:number;
    public color:string;
    public is5G:boolean;
    public camaraNumber:number;
    public price:number;

   public constructor(name:string, modelo:string, trademark:string, sdSize:number, color:string, is5G:boolean, camaraNumber:number,price:number){
       this.name=name;
       this.modelo=modelo;
       this.trademark=trademark;
       this.sdSize=sdSize;
       this.color=color;
       this.is5G=is5G;
       this.camaraNumber=camaraNumber;
       this.price=price;
   }

  public toString(){
      return this.name+ " "+ this.modelo+ "  "+ this.trademark+" "+this.sdSize+" "+this.color+" "+this.is5G+" "+this.camaraNumber+" "+this.price;
  }

}