function set_dimensions(){
    if(screen.width<=768){
        document.body.style.overflowX= "hidden";
        canvas.width=screen.width-60;
        canvas.height=480;
    }
}
var canvas=document.getElementById("Canvas");
var pen=canvas.getContext("2d");
var tracker=0;
var radius=40;
var startX,startY,endX,endY;
var draw=function(event){
    var colour=document.getElementById("color").value;
    var x=event.clientX-canvas.offsetLeft;
    var y=event.clientY-canvas.offsetTop;
    pen.beginPath();
    pen.lineWidth=document.getElementById("width_").value;
    radius=document.getElementById("Radius").value;
    pen.strokeStyle=colour;
    pen.arc(x,y,radius,0,6.28);
    pen.stroke();
};
canvas.addEventListener('click',draw);
canvas.addEventListener('mouseup',mouse_up);
canvas.addEventListener('mousedown',mouse_down);
canvas.addEventListener('mouseleave',mouse_leave);
canvas.addEventListener('mousemove',mouse_move);
canvas.addEventListener('touchstart',touch_start);
canvas.addEventListener('touchmove',touch_move);
function touch_start(ev){
    startX=ev.touches[0].clientX-canvas.offsetLeft;
    startY=ev.touches[0].clientY-canvas.offsetTop;
}
function touch_move(ev){
    endX=ev.touches[0].clientX-canvas.offsetLeft;
    endY=ev.touches[0].clientY-canvas.offsetTop;
    pen.beginPath();
    pen.strokeStyle=document.getElementById("color").value;
    pen.lineWidth=document.getElementById("width_").value;
    pen.moveTo(startX,startY);
    pen.lineTo(endX,endY);
    pen.stroke();
    startX=endX;
    startY=endY;
}
function mouse_up(){
    tracker=0;
}
function mouse_down(){
    tracker=1;
}
function mouse_leave(){
    tracker=0;
}
function mouse_move(e){
    startX=e.clientX-canvas.offsetLeft;
    startY=e.clientY-canvas.offsetTop;
    if(tracker==1){
        pen.beginPath();
        pen.strokeStyle=document.getElementById("color").value;
        pen.lineWidth=document.getElementById("width_").value;
        pen.moveTo(startX,startY);
        pen.lineTo(endX,endY);
        pen.stroke();
    }
    endX=startX;
    endY=startY;
}
function clear_canvas(){
    pen.clearRect(0,0,800,450);
}