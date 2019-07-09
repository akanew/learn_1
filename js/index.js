var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

if(ctx){
	ctx.moveTo(50, 50); // Начальные координаты карандаша
	ctx.strokeStyle = "blue"; // цвет карандаша

	ctx.lineTo(200, 200); // Даёшь линию!
	ctx.fillRect(10,10, 80,80); // прямоугольник	
	ctx.stroke(); // Отображение всего нарисованного (функции ...Rect уже содержат ее внутри)
	
	//Примечание: приоритет отрисовки по порядку исполнения stroke в коде - см. линию на прямоугольнике
}
else {
	//browser don't support the canvas
}

