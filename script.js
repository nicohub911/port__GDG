const imagenes = document.getElementsByTagName("img");
const body = document.querySelector("body");
const pantallaDeCarga = document.querySelector(".pantallaCarga");
const textoDeCarga = document.querySelector(".pantallaCarga__texto");
const elementosCabecera = document.querySelectorAll(".cabecera__elemento");
let posicionX = 0, posicionY = 0; // Para la cabecera.
let imagenesCargadas = 0, textoParaLaCarga = "La pagina se esta cargando..."; // Para la carga de imagenes.

// Ejecuto la maquina de escribir
document.addEventListener("DOMContentLoaded",()=>{
    maquina(textoParaLaCarga, textoDeCarga);    
});

// Para hacer el movimineto de la cabecera.
window.addEventListener("mousemove", (e)=>{
    posicionX = e.clientX - window.innerWidth / 2;
    posicionY = e.clientY - window.innerHeight / 2;

    for (const elemento of elementosCabecera) {
        let velocidadHorizontal = elemento.dataset.velx;
        let velocidadVertical = elemento.dataset.vely;
        elemento.style.transform = `translateX(calc(-50% + ${-posicionX * velocidadHorizontal}px)) translateY(calc(-50% + ${-posicionY * velocidadVertical}px))`;
    }
});

// Funcion para comprobar si todas las imagenes estan cargadas.
function comprobarIMG() {
    if (imagenesCargadas === imagenes.length) {
        let a = setTimeout(() => {
            pantallaDeCarga.style.opacity = "0"; // quito la pantalla de carga.
            body.style.overflowY = "scroll" // le devuelvo el scroll vertical a la pagina.
            clearTimeout(a);
        }, 3500);
    }
}

// Funcion para ver que imagenes se cargaron.
for (const img of imagenes) {
    img.addEventListener(`load`, ()=>{
        imagenesCargadas ++;
        comprobarIMG();
    });
}

// Funcion que hace el efecto de escribir letra por letra
function maquina(texto, contenedor) {        
    let caracteres = texto.split("");
    let contador = 0;
    contenedor.innerHTML = "";
    let tiempo = setInterval(()=>{
        contenedor.innerHTML += caracteres[contador];
        contador ++;
        if(contador === caracteres.length){
            clearInterval(tiempo);
        }
    }, 100);
}