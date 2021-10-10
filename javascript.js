function start(){
    document.getElementById("svgDiv").style.display = "none";
    document.getElementById("svgDiv_pop").style.display = "none";
    document.getElementById("svgDiv_av").style.display = "block";
    document.getElementById("svgDiv_viv").style.display = "none";

}

window.addEventListener('load', start);

//limpiar info al sacar cursor del mapa
function limpiar(){
    document.getElementById("nombre_region").innerHTML = " "
    document.getElementById("areas_verdes").innerHTML = " "
    document.getElementById("pob_migrante").innerHTML = " "
    document.getElementById("viv_colectivas").innerHTML = " "
}

//regiones

function ap(){
    document.getElementById("nombre_region").innerHTML = "Arica y Parinacota"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function ta(){
    document.getElementById("nombre_region").innerHTML = "Tarapacá"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function an(){
    document.getElementById("nombre_region").innerHTML = "Antofagasta"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function at(){
    document.getElementById("nombre_region").innerHTML = "Atacama"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function co(){
    document.getElementById("nombre_region").innerHTML = "Coquimbo"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function va(){
    document.getElementById("nombre_region").innerHTML = "Valparaiso"
    document.getElementById("areas_verdes").innerHTML = "m2 = 7654"
    document.getElementById("pob_migrante").innerHTML = "Cantidad = 4328 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 38292 viviendas"
}

function rm(){
    document.getElementById("nombre_region").innerHTML = "Metropolitana"
    document.getElementById("areas_verdes").innerHTML = "m2 = 384"
    document.getElementById("pob_migrante").innerHTML = "Cantidad = 9988 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 94392 viviendas"
}

function li(){
    document.getElementById("nombre_region").innerHTML = "O'Higgins"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function ml(){
    document.getElementById("nombre_region").innerHTML = "Maule"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function nb(){
    document.getElementById("nombre_region").innerHTML = "Ñuble"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function bi(){
    document.getElementById("nombre_region").innerHTML = "Biobío"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""    
}

function ar(){
    document.getElementById("nombre_region").innerHTML = "La Araucania"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = "" 
}

function lr(){
    document.getElementById("nombre_region").innerHTML = "Los Ríos"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""     
}

function ll(){
    document.getElementById("nombre_region").innerHTML = "Los Lagos"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = "" 
}

function ai(){
    document.getElementById("nombre_region").innerHTML = "Aysén"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = "" 
}

function ma(){
    document.getElementById("nombre_region").innerHTML = "Magallanes y Antártica"
    document.getElementById("areas_verdes").innerHTML = ""
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = "" 
}






//botones mapas

function bot_pop(){ //rosado
    //document.getElementById("svgDiv").style.display = "none";
    document.getElementById("svgDiv_pop").style.display = "block";
    document.getElementById("svgDiv_av").style.display = "none";
    document.getElementById("svgDiv_viv").style.display = "none";
}

function bot_av(){  //verde
    //document.getElementById("svgDiv").style.display = "none";
    document.getElementById("svgDiv_pop").style.display = "none";
    document.getElementById("svgDiv_av").style.display = "block";
    document.getElementById("svgDiv_viv").style.display = "none";  
}

function bot_viv(){ //rojo
    //document.getElementById("svgDiv").style.display = "none";
    document.getElementById("svgDiv_pop").style.display = "none";
    document.getElementById("svgDiv_av").style.display = "none";
    document.getElementById("svgDiv_viv").style.display = "block";
}


//////////// grafico barras
