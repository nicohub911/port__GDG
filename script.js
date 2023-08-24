const elementosCabecera = document.querySelectorAll(".cabecera__elemento");
let posicionX = 0, posicionY = 0;


window.addEventListener("mousemove", (e)=>{
    posicionX = e.clientX - window.innerWidth / 2;
    posicionY = e.clientY - window.innerHeight / 2;
    console.log(posicionX + " " + posicionY)
    for (const elemento of elementosCabecera) {
        let velocidadHorizontal = elemento.dataset.velx;
        let velocidadVertical = elemento.dataset.vely;
        elemento.style.transform = `translateX(calc(-50% + ${-posicionX * velocidadHorizontal}px)) translateY(calc(-50% + ${-posicionY * velocidadVertical}px))`;
    }
});