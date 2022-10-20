/* --- Añadir iconos y mostrar menú al dar clic sobre menu de hamburguesa con clip path */
document.querySelector('#open-menu').onclick = () =>{
    document.querySelector('#open-menu').classList.toggle('fa-times'); /* cambia el icono por la X al dar clic */
    document.querySelector('.menu').classList.toggle('active');
}