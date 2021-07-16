var canvas = new fabric.Canvas("myCanvas");

ball_x = 0;
ball_y = 0;
hole_x= 1000;
hole_y= 450;
bih = 20;
biw = 20;
var bo
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_object)
		});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		bo = Img;
	
		bo.scaleToWidth(50);
		bo.scaleToHeight(50);
		bo.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(bo)
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(bo);
		document.getElementById("hd3").innerHTML = "You have a success!!!";
		document.getElementById("myCanvas").style.borderColor = "red";}
		else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	
function up(){
	if(ball_y >= 0){
	   ball_y = ball_y - bih;
	   canvas.remove(bo);
	   new_image();
	}
 }
 
 function down(){
	if(ball_y <= 450){
	   ball_y = ball_y + bih;
	   canvas.remove(bo);
	   new_image();
	}
 }
 
 function left(){
	if(ball_x >= 0){
	   ball_x = ball_x - biw;
	   canvas.remove(bo);
	   new_image();
	}
 }
 function right(){
	if(ball_x <= 1050){
	   ball_x = ball_x + biw;
	   canvas.remove(bo);
	   new_image();
	}
 }
	
}


