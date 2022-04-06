import Disk from "./class/Disk.class.js";

// déclarer les variables qui vont recevoir le canvas et le context
let canvas = document.getElementById(`masterpiece`);
let ctx = canvas.getContext(`2d`);
console.log(ctx);

let disk = new Disk(canvas, ctx)
// fonction getMouseLocation(e) qui va retourner la position de la souris
function getMouseLocation() {}

// fonction onClickCanvas(e) qui va récuperer la position du clic et appeler differente méthodes pour génerer le dessin
function onClickCanvas(e) {
    
    console.log(disk);
    
    
    draw();

}

// au chargement de la page, on va récupérer le canvas, le context et installer un écouteur
document.addEventListener("DOMContentLoaded", () => {
canvas.addEventListener(`click`, onClickCanvas)
});


