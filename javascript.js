function rm(){
    document.getElementById("nombre_region").innerHTML = "RM"
    document.getElementById("areas_verdes").innerHTML = "m2 = 384"
}
function valp(){
    document.getElementById("nombre_region").innerHTML = "Valparaiso"
    document.getElementById("areas_verdes").innerHTML = "m2 = 7654"
}


function limpiar(){
    document.getElementById("nombre_region").innerHTML = ""
    document.getElementById("areas_verdes").innerHTML = ""

}

function color1 (){
    document.getElementsById("").style.fill = "pink"
}













function fxnboton(){
    var x = document.getElementById("trekking");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
  }
}

function cambiar(){
    document.getElementById("titulo").innerHTML = "hhola ratola ón con cola"
}

function color(){
    //document.getElementById("botones").style.backgroundColor="black"
    var x = document.getElementById("botones")
    if (x.style.backgroundColor === "lightgreen"){
        x.style.backgroundColor = "black"
    }else{
        x.style.backgroundColor = "lightgreen"
    }
}