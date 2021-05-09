function verify(){
    age =  document.getElementById("age_registration").value; 
    window.location = "index_pg3.html"; 
    localStorage.setItem("Age:", age);
}

function preview_image(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('output_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);

 document.getElementById("paint").style.display = "block"; 
}

var mouseEvent = "empty"; 
var x_position, y_position;

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");	
color = "black"; 
width = 1; 
canvas.addEventListener("mousedown", my_mousedown); 
function my_mousedown(e) { 
    mouseEvent = "mouseDown"; 
}

canvas.addEventListener("mouseup", my_mouseup); 
function my_mouseup(e){
    mouseEvent = "mouseup"; 
}

canvas.addEventListener("mouseleave", my_mouseleave); 
function my_mouseleave(e){ 
    mouseEvent = "mouseleave"; 
}

canvas.addEventListener("mousemove", my_mousemove); 
function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft; 
    current_y = e.clientY - canvas.offsetTop; 

    if (mouseEvent == "mouseDown"){ 
        ctx.beginPath(); 
        ctx.strokestyle = color; 
        ctx.linewidth = width; 
        console.log("Last position of x and y coordinates are equal to - ");
        console.log("x - "+ x_position + " y - " + y_position);
        ctx.moveTo(x_position, y_position); 

        console.log("Current position of x and y coordinates are equal to - ");
        console.log("x - "+ current_x + " y - " + current_y);
        ctx.lineTo(current_x, current_y); 
        ctx.stroke(); 
    }

    x_position = current_x; 
    y_position = current_y; 
}