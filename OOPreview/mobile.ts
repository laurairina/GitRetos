export class Mobile{
    private name:string;
    private modelo:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private camaraNumber:number;
    private price:number;

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
      return this.name+ ", "+ this.modelo+ ", "+ this.trademark+", "+this.sdSize+", "+this.color+", "+this.is5G+", "+this.camaraNumber+", "+this.price;
  }

  public setName(name:string){
     this.name=name;
  }

  public setModelo(modelo:string){
    this.modelo=modelo;
  }

  public setTrademark(trademark:string){
    this.trademark=trademark;
  }

  public setSdSize(sdSize:number){
     this.sdSize=sdSize;
  }

  public setColor(color:string){
     this.color=color;
  }

  public setIs5G(is5G:boolean){
    this.is5G=is5G;
  }

  public setCamaraNumber(camaraNumber:number){
    this.camaraNumber=camaraNumber;
  }

  public setPrice(price:number){
    this.price=price;
  }

  public getName(){
    return this.name;
 }

 public getModelo(){
   return this.modelo;
 }

 public getTrademark(){
   return this.trademark;
 }

 public getSdSize(){
   return this.sdSize;
 }

 public getColor(){
    return this.color;
 }

 public getIs5G(){
   return this.is5G;
 }

 public getCamaraNumber(){
   return this.camaraNumber;
 }

 public getPrice(){
  return this.price;
 }

 public imprimirCaracteristicas():string{
  return "\n\t\"The characteristics of the mobile name are: \"\n"+"\t Name: "+this.name+"\n\t Model: "+this.modelo+"\n\t Trademark: "+this.trademark+"\n\t SD Size (GB): "+this.sdSize+"\n\t Color: "+this.color+"\n\t Is 5G?: "+this.is5G+"\n\t Number of Cameras: "+this.camaraNumber;
 }


}