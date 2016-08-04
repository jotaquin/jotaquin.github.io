//2016 08 04 jueves
//colegio oratorio don bosco
//snatiago de chile
//latinoamerica
//clase de progamacion
//funciona con p5.js
//jotaquin
//saludos a mi mami

var diametro;

diametro = 100;


//setup() corre una vez
//al principio


function setup() {


 //creo un lienzo
 //createCanvas( dimHor; dimVer)
	createCanvas(800, 600);
 //pintar el fondo verde
//0 es nada, 255 es todo
	background(0, 255, 245);
}

//draw() se ejecuta despues
//de setup()
//se hace 60 veeces por segundo
function draw() {


	//definir estilo de la elpipse
	//difinir ancho del borde
	//strokeWeight(px);
	strokeWeight(10);

	//definir color del vorde
	//stroke(color);
	//borde azul semitransparente
	stroke(70, 100, 100, 255/2)

	//definir color del relleno
	//fill(colo);
	//rojo semitransparente
	//fill(200, 0, 0, 255/2)
	fill(random(255), random(255), random(255), random(255));
	fill(255*mouseY/height, 0, 0);
	

	//explicacion del color
	//1: grayscale, 0 es negro, 255 es blanco
	//2: grayscale + alpha
	//3: RGB, red, green, blue
	//4: RGB + alpha
	//alpha es transparente, 255 es solido

	

	//dibujar una elipse
	//que sigue el mouse
	//ellipse(posX, posY, width, height);
	ellipse(mouseX, mouseY, diametro, diametro);
	diametro = 24 + 2000 * random(1000)/1000;
}