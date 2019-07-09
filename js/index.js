var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

if(ctx){
	ctx.moveTo(50, 50);          // Начальные координаты карандаша
	ctx.strokeStyle = "blue";    // цвет карандаша

	ctx.lineTo(200, 200);        // Даёшь линию!
	ctx.fillRect(10,10, 80,80);  // прямоугольник с заливкой
	ctx.clearRect(20,20, 60,60); // прямоугольник с прозрачным фоном
	ctx.strokeRect(5,5, 50,50);  // контурный прямоуголник
	
	ctx.beginPath();	
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(175,50);
	ctx.lineTo(125,25);	
    ctx.fill();	                 // Отображение залитых фигур
	ctx.closePath();
	
	// Окружности и дуги
	ctx.moveTo(30,120);
	ctx.arc(20, 130, 20, 0, 90, true); //x,y,r, startAngle, endAngle, isArc or Circle
	
	ctx.stroke();                // Отображение контуных фигур
	
	// Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();
	
	// Копирование куска отображаемой области
	var rectangle = new Path2D();
	rectangle.rect(150, 150, 60, 60);
	ctx.strokeStyle = "red";
	ctx.stroke(rectangle);
		
	var imgData = ctx.getImageData(150, 150, 50, 50);	
	ctx.putImageData(imgData, 10, 70);
	
	// Примечания: 
	// 1. приоритет отрисовки по порядку исполнения stroke в коде - см. линию на прямоугольнике
	// 2. все ...stroke функции используют цвет strokeStyle
	// 3. fill() - залитая фигура, stroke() - контурная фигура, "path"  - контур фигуры (группировка примитивов)
	// 4. lineTo рисует прямые от moveTo до указанных координат
}
else {
	//browser don't support the canvas
}

//https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Рисование_фигур