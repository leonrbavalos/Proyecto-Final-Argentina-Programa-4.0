//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=19;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let ritmo = document.getElementById("ritmo");
crearBarra(ritmo);
let tiro = document.getElementById("tiro");
crearBarra(tiro);
let pases = document.getElementById("pases");
crearBarra(pases);
let regates = document.getElementById("regates");
crearBarra(regates);
let defensa = document.getElementById("defensa");
crearBarra(defensa);
let fisico = document.getElementById("fisico");
crearBarra(fisico);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalRitmo = setInterval(function(){
            pintarBarra(ritmo, 17, 0, intervalRitmo);
        },100);
        const intervalTiro = setInterval(function(){
            pintarBarra(tiro, 18, 1, intervalTiro);
        },100);
        const intervalPases = setInterval(function(){
            pintarBarra(pases, 18, 2, intervalPases);
        },100);
        const intervalRegates = setInterval(function(){
            pintarBarra(regates, 19, 3, intervalRegates);
        },100);
        const intervalDefensa = setInterval(function(){
            pintarBarra(defensa, 7, 4, intervalDefensa);
        },100);
        const intervalFisico = setInterval(function(){
            pintarBarra(fisico, 13, 5, intervalFisico);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#298deb";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}