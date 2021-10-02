function rm(){

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
    document.getElementById("titulo").innerHTML = "hola hola ratón con cola"
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