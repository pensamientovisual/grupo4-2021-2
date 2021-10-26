$(document).ready(function(){
    var foto1 = false;
    var foto2 = false;

    var aisen = $("#CL-AI");
    aisen.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Aysén del General Carlos Ibáñez del Campo")
});
    aisen.mouseleave(function(){$(this).fadeTo("fast",1);});
    aisen.click(function()
    {if (foto1 !== true){
    foto1 = true;
    $(".foto").show();
    $("#foto1").show();
    document.getElementById("foto1").src = "datos_regiones/AYSEN.jpg";
    } else if (document.getElementById("foto1").src !== "datos_regiones/AYSEN.jpg" && document.getElementById("foto2").src !== "datos_regiones/AYSEN.jpg"){ 
        document.getElementById("foto2").src = document.getElementById("foto1").src
        document.getElementById("foto1").src = "datos_regiones/AYSEN.jpg";
        $("#foto2").show();
    }})

    var magallanes = $("#CL-MA");
    magallanes.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Magallanes y Antártica Chilena")
});
    magallanes.mouseleave(function(){$(this).fadeTo("fast",1);});
    magallanes.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/MAGALLANES.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/MAGALLANES.jpg" && document.getElementById("foto2").src !== "datos_regiones/MAGALLANES.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/MAGALLANES.jpg";
            $("#foto2").show();
        }})


    var antofagasta = $("#CL-AN");
    antofagasta.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Antofagasta")
});
    antofagasta.mouseleave(function(){$(this).fadeTo("fast",1);});
    antofagasta.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/ANTOFAGASTA.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/ANTOFAGASTA.jpg" && document.getElementById("foto2").src !== "datos_regiones/ANTOFAGASTA.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/ANTOFAGASTA.jpg";
            $("#foto2").show();
        }})

    var atacama = $("#CL-AT");
    atacama.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Atacama")
});
    atacama.mouseleave(function(){$(this).fadeTo("fast",1);});
    atacama.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/ATACAMA.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/ATACAMA.jpg" && document.getElementById("foto2").src !== "datos_regiones/ATACAMA.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/ATACAMA.jpg";
            $("#foto2").show();
        }})
    
    var coquimbo = $("#CL-CO");
    coquimbo.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Coquimbo")
});
    coquimbo.mouseleave(function(){$(this).fadeTo("fast",1);});
    coquimbo.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/COQUIMBO.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/COQUIMBO.jpg" && document.getElementById("foto2").src !== "datos_regiones/COQUIMBO.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/COQUIMBO.jpg";
            $("#foto2").show();
        }})

    var valparaiso = $("#CL-VS");
    valparaiso.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Valparaíso")
});
    valparaiso.mouseleave(function(){$(this).fadeTo("fast",1);});
    valparaiso.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/VALPARAISO.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/VALPARAISO.jpg" && document.getElementById("foto2").src !== "datos_regiones/VALPARAISO.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/VALPARAISO.jpg";
            $("#foto2").show();
        }})
    

    var araucania = $("#CL-AR");
    araucania.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Araucanía")
});
    araucania.mouseleave(function(){$(this).fadeTo("fast",1);});
    araucania.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/ARAUCANIA.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/ARAUCANIA.jpg" && document.getElementById("foto2").src !== "datos_regiones/ARAUCANIA.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/ARAUCANIA.jpg";
            $("#foto2").show();
        }})

    var libertador = $("#CL-LI");
    libertador.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Libertador General Bernardo O'Higgins")
});
    libertador.mouseleave(function(){$(this).fadeTo("fast",1);});
    libertador.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/OHIGGINS.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/OHIGGINS.jpg" && document.getElementById("foto2").src !== "datos_regiones/OHIGGINS.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/OHIGGINS.jpg";
            $("#foto2").show();
        }})

    var lagos = $("#CL-LL");
    lagos.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Los Lagos")
});
    lagos.mouseleave(function(){$(this).fadeTo("fast",1);});
    lagos.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/LOS_LAGOS.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/LOS_LAGOS.jpg" && document.getElementById("foto2").src !== "datos_regiones/LOS_LAGOS.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/LOS_LAGOS.jpg";
            $("#foto2").show();
        }})


    var maule = $("#CL-ML");
    maule.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Maule")
});
    maule.mouseleave(function(){$(this).fadeTo("fast",1);});
    maule.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/MAULE.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/MAULE.jpg" && document.getElementById("foto2").src !== "datos_regiones/MAULE.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/MAULE.jpg";
            $("#foto2").show();
        }})


    var arica = $("#CL-AP");
    arica.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Arica y Parinacota")
});
    arica.mouseleave(function(){$(this).fadeTo("fast",1);});
    arica.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/ARICA_PARINACOTA.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/ARICA_PARINACOTA.jpg" && document.getElementById("foto2").src !== "datos_regiones/ARICA_PARINACOTA.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/ARICA_PARINACOTA.jpg";
            $("#foto2").show();
        }})

    var rios = $("#CL-LR");
    rios.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Los Ríos")
});
    rios.mouseleave(function(){$(this).fadeTo("fast",1);});
    rios.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/LOS_RIOS.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/LOS_RIOS.jpg" && document.getElementById("foto2").src !== "datos_regiones/LOS_RIOS.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/LOS_RIOS.jpg";
            $("#foto2").show();
        }})


    var tarapaca = $("#CL-TA");
    tarapaca.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Tarapacá")
});
    tarapaca.mouseleave(function(){$(this).fadeTo("fast",1);});
    tarapaca.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/TARAPACA.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/TARAPACA.jpg" && document.getElementById("foto2").src !== "datos_regiones/TARAPACA.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/TARAPACA.jpg";
            $("#foto2").show();
        }})

    var biobio = $("#CL-BI");
    biobio.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Biobío")
});
    biobio.mouseleave(function(){$(this).fadeTo("fast",1);});
    biobio.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/BIOBIO.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/BIOBIO.jpg" && document.getElementById("foto2").src !== "datos_regiones/BIOBIO.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/BIOBIO.jpg";
            $("#foto2").show();
        }})

    var nuble = $("#CL-NU");
    nuble.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Ñuble")
});
    nuble.mouseleave(function(){$(this).fadeTo("fast",1);});

    var santiago = $("#CL-RM");
    santiago.mouseenter(function(){$(this).fadeTo("fast",0.5);
    $("#region").text("Región Metropolitana de Santiago")
});

    santiago.mouseleave(function(){$(this).fadeTo("fast",1);});
    santiago.click(function()
    {if (foto1 !== true){
        foto1 = true;
        $(".foto").show();
        $("#foto1").show();
        document.getElementById("foto1").src = "datos_regiones/RM.jpg";
        } else if (document.getElementById("foto1").src !== "datos_regiones/RM.jpg" && document.getElementById("foto2").src !== "datos_regiones/RM.jpg"){ 
            document.getElementById("foto2").src = document.getElementById("foto1").src
            document.getElementById("foto1").src = "datos_regiones/RM.jpg";
            $("#foto2").show();
        }})
});
