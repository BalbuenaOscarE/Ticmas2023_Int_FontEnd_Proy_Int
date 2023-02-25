let titulo = document.getElementById("index_titulo");
let presentacion = document.getElementById("index_presentacion");
let informacion = document.getElementById("index_informacion");
let menu = document.getElementById("menu");

titulo.style.display = "none";
presentacion.style.display = "none";
informacion.style.display = "none";
menu.style.display = "none";

/*

function visibilizarPagina(){

    if (titulo.style.display == "none"){

        titulo.style.display = "block";

    } else if (presentacion.style.display == "none"){

        presentacion.style.display = "block";

    } else if (informacion.style.display == "none"){

        informacion.style.display = "block";

    } else if (menu.style.display == "none"){

        menu.style.display = "block";

    }

}

*/

let elementoActual = 0

function visibilizarPagina() {
    
switch (elementoActual) {

case 0:
titulo.style.display = "block";
break;

case 1:
presentacion.style.display = "block";
titulo.style.animation = "none";
titulo.style.borderRight = "none";
break;

case 2:
informacion.style.display = "block";
presentacion.style.animation = "none";
presentacion.style.borderRight = "none";
break;

case 3:
menu.style.display = "block";
informacion.style.animation = "none";
informacion.style.borderRight = "none";
break;

default:
break;
}

elementoActual++;

}

document.addEventListener("click", function()
{
    visibilizarPagina();
});
