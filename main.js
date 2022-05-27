var Mouse_event = "empty" ;
var last_position_of_x,last_position_of_y ;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
width_of_line = 2;
canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
    Mouse_event = "mousedown";

}
canvas.addEventListener("mousemove", my_mouse_move);
function my_mouse_move(e){
    currentpositionofmouse_x = e.clientX - canvas.offsetLeft;
    currentpositionofmouse_y = e.clientY - canvas.offsetTop;
    if (Mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last position of x and y are");
        console.log("x = "  + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y are");
        console.log("x = "  + currentpositionofmouse_x + "y = " + currentpositionofmouse_y);
        ctx.lineTo(currentpositionofmouse_x,currentpositionofmouse_y);
        ctx.stroke()
    } 
     last_position_of_x = currentpositionofmouse_x;
     last_position_of_y =currentpositionofmouse_y;
     
}
canvas.addEventListener("mouseup", my_mouse_up);
function my_mouse_up(e){
    Mouse_event = "mouseup";

}
canvas.addEventListener("mouseleave", my_mouse_leave);
function my_mouse_leave(e){
    Mouse_event = "mouseleave";

}