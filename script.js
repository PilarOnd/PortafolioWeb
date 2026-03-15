// BOTONES DEL MENU
const btnProyectos = document.getElementById("btn-proyectos");
const btnExperiencia = document.getElementById("btn-experiencia");
const btnBlog = document.getElementById("btn-blog");

// SECCIONES
const seccionProyectos = document.getElementById("proyectos");
const seccionExperiencia = document.getElementById("experiencia");
const seccionBlog = document.getElementById("blog");

function ocultarTodo(){
    seccionProyectos.classList.add("oculto");
    seccionExperiencia.classList.add("oculto");
    seccionBlog.classList.add("oculto");
}

function quitarActivo(){
    btnProyectos.classList.remove("activo");
    btnExperiencia.classList.remove("activo");
    btnBlog.classList.remove("activo");
}

btnProyectos.addEventListener("click", function(){
    ocultarTodo();
    seccionProyectos.classList.remove("oculto");
    quitarActivo();
    btnProyectos.classList.add("activo");
});

btnExperiencia.addEventListener("click", function(){
    ocultarTodo();
    seccionExperiencia.classList.remove("oculto");
    quitarActivo();
    btnExperiencia.classList.add("activo");
});

btnBlog.addEventListener("click", function(){
    ocultarTodo();
    seccionBlog.classList.remove("oculto");
    quitarActivo();
    btnBlog.classList.add("activo");
});

// Al cargar la página, "Proyectos" está activo (es la sección visible por defecto)
btnProyectos.classList.add("activo");

// CAMBIO DE TEMA
const botonTema = document.getElementById("btn-tema");

botonTema.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        botonTema.textContent = "Modo claro";
    }else{
        botonTema.textContent = "Modo oscuro";
    }

});