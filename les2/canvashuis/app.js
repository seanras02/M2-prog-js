class App
{
    runApplication()

    {
        console.log("hello world!");
        let canvas = document.getElementById("canvasId")

        console.log(canvas)

        let g = canvas.getContext("2d");

        g.fillRect(0,0,10,10);

        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "lightgray";
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 675);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        //side square
        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "lightgray"
        g.moveTo(600, 675);
        g.lineTo(815, 555);
        g.lineTo(815, 350);
        g.lineTo(600, 450)
        g.closePath();
        g.stroke();
        g.fill();

        //side triangle
        g.beginPath();
        g.strokeStyle = "gray";
        g.fillStyle = "lightblue"
        g.moveTo(815, 350);
        g.lineTo(700, 200);
        g.lineTo(600, 450)
        g.closePath();
        g.stroke();
        g.fill();

        //roof
        g.beginPath();
        g.strokeStyle = "brown";
        g.fillStyle = "lightblue";
        g.moveTo(300, 100);
        g.lineTo(700, 200);
        g.lineTo(600, 450);
        g.lineTo(200, 300);
        g.closePath();
        g.stroke();
        g.fill();

        //window
        g.beginPath();
        g.fillStyle = "lightyellow";
        g.strokeStyle = "gray";
        g.moveTo(265, 350);
        g.lineTo(265, 450);
        g.lineTo(363, 490);
        g.lineTo(365, 385);
        g.lineTo(265, 350);
        g.fill();
        g.moveTo(310, 365);
        g.lineTo(310, 469);
        g.closePath();
        g.stroke();
    }
}