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
    document.getElementById("areas_verdes").innerHTML = "Parques = 32m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 25.680 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 299 vivendias"
}

function ta(){
    document.getElementById("nombre_region").innerHTML = "Tarapacá"
    document.getElementById("areas_verdes").innerHTML = "Parques = 46m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 60.927 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 359 vivendias"
}

function an(){
    document.getElementById("nombre_region").innerHTML = "Antofagasta"
    document.getElementById("areas_verdes").innerHTML = "Parques = 91m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 89.552 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 1.176 vivendias"
}

function at(){
    document.getElementById("nombre_region").innerHTML = "Atacama"
    document.getElementById("areas_verdes").innerHTML = "Parques = 91m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 16.070 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 449 vivendias"
}

function co(){
    document.getElementById("nombre_region").innerHTML = "Coquimbo"
    document.getElementById("areas_verdes").innerHTML = "Parques = 249m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 29.684 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 764 vivendias"
}

function va(){
    document.getElementById("nombre_region").innerHTML = "Valparaiso"
    document.getElementById("areas_verdes").innerHTML = "Parques = 579m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 83.561 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 1.486 viviendas"
}

function rm(){
    document.getElementById("nombre_region").innerHTML = "Metropolitana"
    document.getElementById("areas_verdes").innerHTML = "Parques = 2.477m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 762.875 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 2.324 viviendas"
}

function li(){
    document.getElementById("nombre_region").innerHTML = "O'Higgins"
    document.getElementById("areas_verdes").innerHTML = "Parques = 184m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 35.613 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 579 vivendias"
}

function ml(){
    document.getElementById("nombre_region").innerHTML = "Maule"
    document.getElementById("areas_verdes").innerHTML = "Parques = 248m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 35.137 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 767 vivendias"
}

function nb(){
    document.getElementById("nombre_region").innerHTML = "Ñuble"
    document.getElementById("areas_verdes").innerHTML = "Sin Información"
    document.getElementById("pob_migrante").innerHTML = ""
    document.getElementById("viv_colectivas").innerHTML = ""
}

function bi(){
    document.getElementById("nombre_region").innerHTML = "Biobío"
    document.getElementById("areas_verdes").innerHTML = "Parques = 427m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 26.929 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 1.159 vivendias"   
}

function ar(){
    document.getElementById("nombre_region").innerHTML = "La Araucania"
    document.getElementById("areas_verdes").innerHTML = "Parques = 359m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 18.645 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 778 vivendias" 
}

function lr(){
    document.getElementById("nombre_region").innerHTML = "Los Ríos"
    document.getElementById("areas_verdes").innerHTML = "Parques = 291m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 7.170 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 467 vivendias"     
}

function ll(){
    document.getElementById("nombre_region").innerHTML = "Los Lagos"
    document.getElementById("areas_verdes").innerHTML = "Parques = 154m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 20.825 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 1.034 vivendias" 
}

function ai(){
    document.getElementById("nombre_region").innerHTML = "Aysén"
    document.getElementById("areas_verdes").innerHTML = "Parques = 64m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 3.368 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 568 vivendias" 
}

function ma(){
    document.getElementById("nombre_region").innerHTML = "Magallanes y Antártica"
    document.getElementById("areas_verdes").innerHTML = "Parques = 98m2"
    document.getElementById("pob_migrante").innerHTML = "Inmigrantes = 8.036 personas"
    document.getElementById("viv_colectivas").innerHTML = "Cantidad = 613 vivendias" 
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
