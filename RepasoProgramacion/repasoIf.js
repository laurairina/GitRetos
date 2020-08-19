function signoZodical(date) {
    var signo;
    if (fecha >= new Date(date.getFullYear(), 1, 20) && fecha <= new Date(date.getFullYear(), 2, 18)) {
        signo = "Acuario";
    }
    else if (fecha >= new Date(date.getFullYear(), 2, 18) && fecha <= new Date(date.getFullYear(), 3, 20)) {
        signo = "Piscis";
    }
    else if (fecha >= new Date(date.getFullYear(), 3, 21) && fecha <= new Date(date.getFullYear(), 4, 19)) {
        signo = "Aries";
    }
    else if (fecha >= new Date(date.getFullYear(), 4, 20) && fecha <= new Date(date.getFullYear(), 5, 20)) {
        signo = "Tauro";
    }
    else if (fecha >= new Date(date.getFullYear(), 5, 21) && fecha <= new Date(date.getFullYear(), 6, 20)) {
        signo = "Geminis";
    }
    else if (fecha >= new Date(date.getFullYear(), 6, 21) && fecha <= new Date(date.getFullYear(), 7, 22)) {
        signo = "Cancer";
    }
    else if (fecha >= new Date(date.getFullYear(), 7, 23) && fecha <= new Date(date.getFullYear(), 8, 22)) {
        signo = "Leo";
    }
    else if (fecha >= new Date(date.getFullYear(), 8, 23) && fecha <= new Date(date.getFullYear(), 9, 22)) {
        signo = "Virgo";
    }
    else if (fecha >= new Date(date.getFullYear(), 9, 23) && fecha <= new Date(date.getFullYear(), 10, 22)) {
        signo = "Libra";
    }
    else if (fecha >= new Date(date.getFullYear(), 10, 23) && fecha <= new Date(date.getFullYear(), 11, 21)) {
        signo = "Escorpio";
    }
    else if (fecha >= new Date(date.getFullYear(), 11, 22) && fecha <= new Date(date.getFullYear(), 12, 21)) {
        signo = "Sagitario";
    }
    else {
        signo = "Capricornio";
    }
    return signo;
}
var fecha = new Date(1993, 1, 5);
console.log("Pregunta 1: Signo del zodiaco \n" + signoZodical(fecha));
//------------------------------------------------------
/*
function encontrarContinente(pais:string):string{
  let continente:string;
  let europa=["España","Italia","Francia","Alemania","Portugal"];
  let america=["EEUU","Mexico","Perú","Colombia","Panama"];
  let asia=["Japon", "Corea del sur","China","Catar","Armenia" ];
  let africa=["Egipto","Marruecos","Gambia","Nigeria","Somalia"];
  let oceania=["Australia","Nueva Zelanda","Gamboa","Fiyi","Tonga"];

  
  if(europa.includes(pais)){
      continente="Europa";
  }
  else if(america.includes(pais)){
      continente="America";
  }
  else if(asia.includes(pais)){
    continente="Asia";
  }
  else if(africa.includes(pais)){
    continente="Africa";
  }
  else{
      continente="Oceania";
  }
   
   return continente;
}
console.log(encontrarContinente("Australia"));

*/
