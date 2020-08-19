 //----------------------------------------

 function numeroPar(arrayN:number[]):boolean{
    let i:number=0; 
    let par:boolean=false;
    while(i<arrayN.length && !par){
        if(arrayN[i]%2==0){
            par=true;
        }
        i++;
     }
    return par;
  }
  let arrayN:number[] =[23,5,1,45,2];

  console.log("\n Pregunta 6: Existe numero par?: "+numeroPar(arrayN));

  //------------------------------------------
  function empezarM(arrayNom:string[]){

    let nombresM:boolean=true;
    let i=0;
    while(i<arrayNom.length && nombresM){
       if(!arrayNom[i].includes("M",0)){
          nombresM=false;
       }
       i++;
    }
    console.log("\n Pregunta 7: Empiezan n M "+nombresM);
  }

  let nombres=["Maria","Manuel","Mathias","Mario"];
  empezarM(nombres);

  //--------------------------------------------
  function sumaCaracteres(caracteres:String[]){
     let suma:number=0;
        caracteres.forEach(element => {
           suma +=element.length;  
       });

     return suma;
  }


  let valores =["Maria","Sergio","Cleopatra","Luis miguel"];
 console.log("\n Pregunta 8: Suma de caracteres "+sumaCaracteres(valores));


  //--------------------------------------------
  function imparPar(numero:number){
    let mensaje:string;
    if(numero%2==0){
       mensaje="El numero es par";
    }
    else{
        mensaje="El numero es impar";
    }
    console.log(mensaje);
  }
//----------------------------------------------------
let array1=["Casa","Coche","Ciudad","Cesta"];
let array2=["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"];
let array3=["Venezuela","Veneno","Voltaje"];
console.log("\n Pregunta 10: ");
imparPar(sumaCaracteres(array1));
imparPar(sumaCaracteres(array2));
imparPar(sumaCaracteres(array3));
