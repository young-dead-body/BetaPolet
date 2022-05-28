.pragma library

//если мы хотим обратиться к элементу, мы должны его передать через CSS и принять в JS

function func() {

}

//======================================
let i = -131.65;
let time = 0;
var root = true;
let gob = 1;

var myCanvas;
var ctx;

function run(frame, mC){
 var endi = i;
    var endtime = time;

    if(frame.rotation < 131.65 && root){
        i+=0.5;
        frame.rotation = i;
    }else{
        i-=0.5;
        if(i < -131.65){
        root = true;
        }
        else{
            frame.rotation = i;
            root = false;
        }
    }
    time+=0.1;

/*if(gob == 1)
{*/
    myCanvas = mC;
    myCanvas.width = 300;
    myCanvas.height = 300;

    ctx = myCanvas.getContext("2d");
    drawLine(ctx,0,0,0,200);
    drawLine(ctx,0,200,200,200);
    drawLine(ctx,200,200,200,0);
    drawLine(ctx,200,0,0,0);

    gob++;
    drawLine(ctx,Math.abs(endtime),Math.abs(endi),Math.abs(time),Math.abs(i));

/*}
else{
    drawLine(ctx,Math.abs(endtime),Math.abs(endi),Math.abs(time),Math.abs(i));
    console.log(Math.abs(endtime),Math.abs(endi),Math.abs(time),Math.abs(i)); // 2
}*/


}


function drawLine(ctx, startX, startY, endX, endY){

    ctx.beginPath();

    /*startX = parseInt(startX,10);
    startY = parseInt(startY,10);
    endX = parseInt(endX,10);
    endY = parseInt(endY,10);*/

    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}




