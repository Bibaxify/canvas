export default class Disk {
    // création du constructor, définition des propriété avec valeur par defaut
    // color, radius, position x & y
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;        
        this.color = "red" ;
        this.radius = 10;
        this.position = {
            x : 400,
            y : 300}
        // console.log("dsfqsdf");
    }

    // declarer les getter et setter en rapport avec les propriétés du constructor
 getInfos()

 set newColor(color){
     this.color = color
 }
    // une derniere méthode draw(argument à trouver)
    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.arc(this.position.x, this.position.y,this.radius, 0, Math.PI * 2, true);
        console.log("test");
    }
}

