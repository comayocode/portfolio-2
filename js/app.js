/* --- Añadir iconos y mostrar menú al dar clic sobre menu de hamburguesa con clip path */
document.querySelector('#open-menu').onclick = () =>{
    document.querySelector('#open-menu').classList.toggle('fa-times'); /* cambia el icono por la X al dar clic */
    document.querySelector('.menu').classList.toggle('active');
}

/* --- Cerrar menú al dar clic en un link */
const menuLinks = document.querySelectorAll(".menu a[href^='#']")
const menu = document.querySelector(".menu");

menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', function() {
        document.querySelector('#open-menu').classList.toggle('fa-times');
        document.querySelector('.menu').classList.toggle('active');
    })
})

/* --- OCULTAR NAV AL HACER SCROLL --- */
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector('.topnav');

window.addEventListener('scroll', function() {
    let ubicacionActual = window.pageYOffset;
    /* --- CONDICION QUE OCULTA O MUESTRA EL NAV --- */
    if( ubicacionPrincipal >= ubicacionActual ){
        $nav.style.top = "0px"
    }else {
        $nav.style.top = "-68px"
    }

    /* --- PASAR UBICACION ACTUAL A LA UBICACION PRINCIPAL --- */
    /* --- Permite que se esconda el nav en cualquier parte de la página*/
    ubicacionPrincipal = ubicacionActual
})