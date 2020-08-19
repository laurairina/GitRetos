//---------------------------------
console.log("\nPregunta 3: Numeros impares ");
function numerosImpares(numero:number){
   
    for(let i=1; i<=numero; i++){
        if(i%2!=0){
            console.log(i);
        }
      
    }
}

numerosImpares(15);

//----------------------------------

function arrayInvertido(array:number[]):number[]{
    let arrayInv:number[]=new Array();
     for(let i=array.length-1; i>=0; i-- ){
        arrayInv.push(array[i]);
     }
  
    return arrayInv;
  }
  let array=[23,14,5,16];
  console.log("\nPregunta 4: Array invertido de ");
  console.log(array);
  console.log(arrayInvertido(array));

  //----------------------------------
function coloresArcoiris(colores:String[]){
    let arcoiris=["rojo","naranja","amarillo","verde","cian","azul","violeta"];
    for(let i=0; i<colores.length;i++){
       arcoiris.forEach(element=>{
           if(element==colores[i]){
               console.log(colores[i]);
           }
       });
    }
  
  }
  let arrayColores=["morado","amarillo","blanco","rojo","negro"];
  console.log("\nPregunta 5: Colores de arcoiris ");
  coloresArcoiris(arrayColores);

 