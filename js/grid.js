/* +--- Se captura el tamaño del dispositivo ----+ */
const tamanioPantalla = screen.width;

/* +--- Se captura el contenido del atributo ----+ */
const fadePhotoshop = document.querySelector(".skill-10[data-aos='fade-right']");
const fadeVscode = document.querySelector(".skill-11[data-aos='fade-right']");

/* +---- Aplicar únicamente en resoluciones iguales o superiores a 768px ----+ */
if(tamanioPantalla >= 768) {
    /* +---- Se añade actualiza el contenido del atributo "data-aos" a "fade-left" ----+ */
    fadePhotoshop.setAttribute("data-aos", "fade-left");
    fadeVscode.setAttribute("data-aos", "fade-left");
}