//Preguntar al usuario por una opcion para el juego//
let eleccionUsuario= prompt(" Elige un numero (Piedra 1, Papel 2 o Tijera 3?");
//Asignar un numero aleatorio en la maquina entre 1 y 3//
const min = 1;
const max = 3;
let eleccionMaquina = Math.floor(Math.random()*(max-min+1)+min);
alert(eleccionMaquina);
//Condiciones para el juego deacuerdo a lo que asigne la maquina//
/*if(eleccionMaquina=="1"){
    if(eleccionUsuario=="1"){
        alert("Empatados!");
    }
    if(eleccionUsuario=="2"){
        alert("Ganaste!");
    }
    if(eleccionUsuario=="3"){
        alert("Perdiste!");
    }
}
if(eleccionMaquina=="2"){
    if(eleccionUsuario=="1"){
        alert("Perdiste!");
    }
    if(eleccionUsuario=="2"){
        alert("Empatados!");
    }
    if(eleccionUsuario=="3"){
        alert("Ganaste!");
    }
}
if(eleccionMaquina=="3"){
    if(eleccionUsuario=="1"){
        alert("Ganaste!");
    }
    if(eleccionUsuario=="2"){
        alert("Perdiste!");
    }
    if(eleccionUsuario=="3"){
        alert("Empatados!");
    }
}*/

if(eleccionMaquina=="1"){
    if(eleccionUsuario=="1"){
        alert("Empatados!");
    }
    if(eleccionUsuario=="2"){
        alert("Ganaste!");
    }
    if(eleccionUsuario=="3"){
        alert("Perdiste!");
    }
}
if(eleccionMaquina == "1" && eleccionUsuario == "1"){
    alert("Empatados!");
}
//No olvidar el tipo de dato que se esta asignando y la comparacion que se realiza//
const piedra = document.getElementById("piedra");
piedra.addEventListener('click', function() {
    alert("click");
})
