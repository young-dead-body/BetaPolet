
    //========Chart================================
    var myCanvas = document.getElementById("myCanvas");


    var ctx = myCanvas.getContext("2d");

    function drawLine(ctx, startX, startY, endX, endY,color){
        ctx.save();
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
        ctx.restore();
    }

    function func(myChart) {
        var myCanvas = myChart;


        var ctx = myCanvas.getContext("2d");
    }

