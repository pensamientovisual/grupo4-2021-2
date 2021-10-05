function start(){
    
    document.getElementById("svgDiv_pop").style.display = "none";
    document.getElementById("svgDiv_av").style.display = "none";
    document.getElementById("svgDiv_viv").style.display = "none";

}

window.addEventListener('load', start);



function rm(){
    document.getElementById("nombre_region").innerHTML = "RM"
    document.getElementById("areas_verdes").innerHTML = "m2 = 384"
    document.getElementById("pob_migrante").innerHTML = "Cantidad = 9988 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 94392 viviendas"


}
function valp(){
    document.getElementById("nombre_region").innerHTML = "Valparaiso"
    document.getElementById("areas_verdes").innerHTML = "m2 = 7654"
    document.getElementById("pob_migrante").innerHTML = "Cantidad = 4328 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 38292 viviendas"
}


function limpiar(){
    document.getElementById("nombre_region").innerHTML = " "
    document.getElementById("areas_verdes").innerHTML = " "
    document.getElementById("pob_migrante").innerHTML = " "
    document.getElementById("viv_colectivas").innerHTML = " "


}

function bot_pop(){ //rosado
    document.getElementById("svgDiv").style.display = "none";
    document.getElementById("svgDiv_pop").style.display = "block";
    document.getElementById("svgDiv_av").style.display = "none";
    document.getElementById("svgDiv_viv").style.display = "none";

    //document.getElementsById("svgDiv").innerHTML = document.getElementById("svgDiv_pop").innerHTML;
    //document.getElementById("svgDiv").style.display = "block";

}

function bot_av(){  //verde
    document.getElementById("svgDiv").style.display = "none";
    document.getElementById("svgDiv_pop").style.display = "none";
    document.getElementById("svgDiv_av").style.display = "block";
    document.getElementById("svgDiv_viv").style.display = "none";

    //document.getElementsById("svgDiv").innerHTML = document.getElementById("svgDiv_av").innerHTML;
}

function bot_viv(){ //rojo
    document.getElementById("svgDiv").style.display = "none";
    document.getElementById("svgDiv_pop").style.display = "none";
    document.getElementById("svgDiv_av").style.display = "none";
    document.getElementById("svgDiv_viv").style.display = "block";
    //document.getElementById("svgDiv").style.display = "none";
    //document.getElementsById("svgDiv").innerHTML = document.getElementById("svgDiv2").innerHTML
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