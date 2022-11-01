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