const slider = document.querySelector("#slider_manual");
let sliderSection = document.querySelectorAll(".slider_section");

// .querySelectorAll porque son varios elementos con slider_section

let sliderSectionLast = sliderSection[sliderSection.length -1];

// el largo de la lista, le restamos uno, y nos devuelve la última posición, ésto lo leemos cómo un index y ya ubicamos la última sección

let btnLeft = document.querySelector("#btn-left");
let btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin",sliderSectionLast)

//inserta el elemento sliderSectionLast, despues de empezar, es decir, en la posición [0]

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_section")[0];

    slider.style.marginLeft = "-200%";

    slider.style.transition = "all 0.5s";

    setTimeout(function(){

slider.style.transition = "none";

slider.insertAdjacentElement("beforeend",sliderSectionFirst);

slider.style.marginLeft = "-100%"

    },500);

}

btnRight.addEventListener("click", function(){

    Next();

}

)

function Prev(){

    let sliderSection = document.querySelectorAll(".slider_section");

    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "0%";

    slider.style.transition = "all 0.5s";

    setTimeout(function(){

slider.style.transition = "none";

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

slider.style.marginLeft = "-100%"

    },500);

}

btnLeft.addEventListener("click", function(){

    Prev();

}

)

/* Para ponerlo automático(cada 5000 ms)

setInterval(function(){ 

    Next();

},5000) */