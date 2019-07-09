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
	
	// Примечания: 
	// 1. приоритет отрисовки по порядку исполнения stroke в коде - см. линию на прямоугольнике
	// 2. все ...stroke функции используют цвет strokeStyle
	// 3. fill() - залитая фигура, stroke() - контурная фигура, "path"  - контур фигуры (группировка примитивов)
	// 4. lineTo рисует прямые от moveTo до указанных координат
}
else {
	//browser don't support the canvas
}

