// var ingreso = new Date(prompt("Ingrese dia mes año de Nacimiento en Numeros\nDe esta forma: 1 1 1999 o 23 5 1986", "4 3 1900" ));  //"29 Junio 1986"
97
// let inicio = fechaToDate(fechaVerso);

let fechaVerso = fechaToDate(prompt("Ingrese dia mes año de Nacimiento en Numeros\nDe esta forma: 1 1 1999 o 23 5 1986", "29 6 1986" ));

// let fechaVerso = fechaToDate("22 12 1977");
// console.log(fechaVerso);



function fechaToDate(fechaIngresada) {
    var arrayDeFecha = fechaIngresada.split(' ');
    
    let dia = arrayDeFecha[0];
    let mes = arrayDeFecha[1];
    let año = arrayDeFecha[2];
    
    let horaYankee = new Date(`${año} ${mes} ${dia}`)
    return horaYankee;    
}
  
function años(fechaComparar) {
    let comparacion = new Date().getFullYear() - fechaComparar.getFullYear();
    return comparacion;    
}

function diasProximaFecha(proximaFecha){
    let fechaEsteAño = `${fechaVerso.getMonth() + 1} ${fechaVerso.getDate()} ${new Date().getFullYear()}`;
    let prueba2 = new Date(fechaEsteAño) - new Date();
    let prueba3 = Math.floor(prueba2 / (1000 * 60 * 60 * 24)+1);
    
    if (prueba3 > 0) {
        let fechaAñoProx = `${fechaVerso.getMonth() + 1} ${fechaVerso.getDate()} ${new Date().getFullYear() }`;
        let cuentaDias = new Date(fechaAñoProx) - new Date();
        let final = Math.floor(cuentaDias / (1000 * 60 * 60 * 24)+1);        
        return final;


    }   else if (prueba3 < 0) {
        let fechaAñoProx = `${fechaVerso.getMonth() + 1} ${fechaVerso.getDate()} ${new Date().getFullYear() +1 }`;
        let cuentaDias = new Date(fechaAñoProx) - new Date();
        let final = Math.floor(cuentaDias / (1000 * 60 * 60 * 24)+1);   
        return final;

    }   else {
            return "0";
    }    
}

// Clima Inventado ***
function climaFalso(){
    let x = Math.floor(Math.random() * 6);
   
    if (x === 0) {
        return ("Soleado");        

    }   else if (x === 1) {
        return ("Nublado");

    }   else if (x === 2) {
        return ("Lluvioso");

    }   else if (x === 3) {
        return ("Hermoso");

    }   else if (x === 4) {
        return ("con Neblina");
    
    }   else if (x === 5) {
        return ("Frio casi Polar");

    }   else {
        return ("Endemoniado");
    }   
};
// Clima Inventado Fin ***

function diaNombre(datoss){
    let diaSemana;
   
    switch (datoss.getDay()) {
        case 0:
            diaSemana = "Domingo";
            return diaSemana;
            //alert("Domingo");
            break;
        case 1:
            diaSemana = "Lunes";
            return diaSemana;
            //alert("Lunes");
            break;
        case 2:
            diaSemana = "Martes";
            return diaSemana;
            //alert("martes");
            break;
        case 3:
            diaSemana = "Miercoles";
            //alert("Miercoles");
            break;
        case 4:
            diaSemana = "Jueves";
            return diaSemana;
            //alert("Jueves");
            break;
        case 5:
            diaSemana = "Viernes";
            //alert("Viernes");
            break;
        case 6:
            diaSemana = "Sabado";
            //alert("Sabado");
            break;          
       
    };
    return diaSemana
};

function zodiaco(fecha) {
    let dia = fecha.getDate();
    let mes = fecha.getMonth()+1;    

    if ((mes == 1 && dia >=21) || (mes == 2 && dia <=19)) {
        return "Acuario";

    }   else if ((mes == 2 && dia >=20) || (mes == 3 && dia <=20)) {
        return "Piscis";
    
    }   else if ((mes == 3 && dia >=21) || (mes == 4 && dia <=20)) {
        return "Aries";

    }   else if ((mes == 4 && dia >=21) || (mes == 5 && dia <=20)) {
        return "Tauro";

    }   else if ((mes == 5 && dia >=21) || (mes == 6 && dia <=21)) {
        return "Geminis";
    
    }   else if ((mes == 6 && dia >=22) || (mes == 7 && dia <=21)) {
        return "Cancer";

    }   else if ((mes == 7 && dia >=22) || (mes == 8 && dia <=22)) {
        return "Leo";

    }   else if ((mes == 8 && dia >=23) || (mes == 9 && dia <=22)) {
        return "Virgo";
    
    }   else if ((mes == 9 && dia >=23) || (mes == 10 && dia <=22)) {
        return "Libra";

    }   else if ((mes == 10 && dia >=23) || (mes == 11 && dia <=22)) {
        return "Escorpio";

    }   else if ((mes == 10 && dia >=23) || (mes == 12 && dia <=21)) {
        return "Sagitario";

    }   else if ((mes == 12 && dia >=22) || (mes == 1 && dia <=20)) {
        return "Capricornio";

    }
};

// Dias hasta la actualidad ***
function diasVividos(fecha) {
    let fechaIngresada = fecha;
    let fechaAhora = new Date();
    
    let h = new Date(fechaAhora) - new Date(fecha);
    let diferenciaDias = Math.floor(h / (1000 * 60 * 60 * 24));
    return diferenciaDias;
};



function meses(mes) {
    let fecha;;
    // debugger
    switch(mes.getMonth() +1) {

        case 1:
            return "Enero";
            break;
        case 2:
            return "Febrero";
            break;
        case 3:
            return "Marzo";
            break;
        case 4:
            return "Abril";
            break;
        case 5:
            return "Mayo";
            break;
        case 6:
            return "Junio";
            break;
        case 7:
            return "Julio";
            break;
        case 8:
            return "Agosto";
            break;
        case 9:
            return "Septiembre";
            break;
        case 10:
            return "Octubre";
            break;
        case 11:
            return "Noviembre";
            break;
        case 12:
            return "Diciembre";
            break;
    }
};

// Fin Dias hasta la actualidad ***

// Salida ***
const salida = `La Fecha que Ingresaste es ${fechaVerso.getDate()} de ${meses(fechaVerso)} de ${fechaVerso.getFullYear()}.\n
Pasaron ${años(fechaVerso)} Años de la Fecha Ingresada. \n
Faltan ${diasProximaFecha(fechaVerso)} dia/s para un nuevo aniversario de la fecha Ingresada. \n
El tiempo en ese dia estaba ${climaFalso()}.\n
Ese dia segun mis calculos fue un ${diaNombre(fechaVerso)}. \n
Si es la Fecha de Nacimiento de una persona su signo es ${zodiaco(fechaVerso)}. \n
Pasaron ${diasVividos(fechaVerso)} dias de la fecha Ingresada.`;

console.log(salida);
alert(salida);


// const salida = 
// `Naciste un dia ${diaSemana}.
// El clima estaba ${climaFalso()}.
// Ya viviste ${diferenciaDias} Dias.`;

// alert(salida);                
// console.log(salida);