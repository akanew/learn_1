var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

if(ctx){
	ctx.moveTo(50, 50);
	ctx.lineTo(200, 200);
	ctx.strokeStyle = "blue";
	ctx.stroke();
}
else {
	//browser don't support the canvas
}

