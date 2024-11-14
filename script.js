let menuVisible = false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar() {
    // oculta el menu una vez que selecciono una opcion
    document.getElementById.classList = "";
    menuVisible = false;
}

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("dota2");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("dedicacion");
        habilidades[7].classList.add("project");

    }
}

window.onscroll = function(){
    efectoHabilidades();
} 