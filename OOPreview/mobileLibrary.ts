import { Mobile } from "./mobile";

export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    public constructor(name:string, location:string, mobiles:Mobile[]){
        this.name=name;
        this.location=location;
        this.mobiles=mobiles;
        this.totalPrice=this.totalPriceCalculation();
    }

    public setName(name:string){
      this.name=name;
    }

    public setLocation(location:string){
      this.location=location;
    }

    public setMobiles(mobiles:Mobile[]){
      this.mobiles=mobiles;
    }
    
    public setTotalPrice(totalPrice:number){
       this.totalPrice=totalPrice;
    }

    public getName(){
        return this.name;
      }
  
      public getLocation(){
        return this.location;
      }
  
      public getMobiles(){
        return this.mobiles;
      }
      
      public getTotalPrice(){
        return this.totalPrice;
      }     
     
      private totalPriceCalculation():number{
          let precioTotal:number=0;
       for (let index = 0; index < this.mobiles.length; index++) {
           precioTotal += this.mobiles[index].getPrice();
           
       }
          return precioTotal;
      }

      public printLibrary(){
          console.log("\n\t \"This all my mobile: \"");
          this.getMobiles().forEach(element => {
              console.log(element.imprimirCaracteristicas());
          });
          console.log("\n\t \"Price overall: "+this.totalPrice+"\"");
      }
}