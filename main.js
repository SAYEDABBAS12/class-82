var mouseEvent = "empty";
var last_position_x , last_position_y ;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "orange";
width_of_Line = 1;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{color = document.getElementById("color").value;
width_of_Line = document.getElementById("width_of_Line").value;

mouseEvent = "mousedown";
}
canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e) 
{
current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_Line;

    console.log("last position of x and y");
    console.log("X ="+last_position_x + "Y ="+last_position_y);
    ctx.moveTo (last_position_x , last_position_y);


    console.log("Current position of X and Y");
    console.log("X ="+ current_position_of_mouse_x + "Y ="+ current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y); 
}
last_position_x = current_position_of_mouse_x;
last_position_y = current_position_of_mouse_y;
}
canvas.addEventListener("mouseup" , my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave" , my_mouseleave );

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}

function clearArea()
{
    ctx.clearRect(0,0, ctx.canvas.width , ctx.canvas.height);
}