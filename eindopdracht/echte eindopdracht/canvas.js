class App{

    runApplication(){
        let canvas = document.getElementById("canvas");
        let g = canvas.getContext("2d");
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(20, 220);
        g.lineTo(0, 240);
        g.lineTo(0, 270);
        g.lineTo(40, 270);
        g.lineTo(40, 240);
        g.closePath();
        g.stroke();
        g.fill();

        /*house green*/
        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(120, 220);
        g.lineTo(100, 240);
        g.lineTo(100, 270);
        g.lineTo(140, 270);
        g.lineTo(140, 240);
        g.closePath();
        g.stroke();
        g.fill();

        /*house red*/
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(220, 220);
        g.lineTo(200, 240);
        g.lineTo(200, 270);
        g.lineTo(240, 270);
        g.lineTo(240, 240);
        g.closePath();
        g.stroke();
        g.fill();

        /*house green*/
        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(320, 220);
        g.lineTo(300, 240);
        g.lineTo(300, 270);
        g.lineTo(340, 270);
        g.lineTo(340, 240,);
        g.closePath();
        g.stroke();
        g.fill();


        g.fillStyle = "grey";
        g.beginPath();
        g.rect(0, 330, 1700, 20)
        g.closePath();
        g.fill();

    
        g.fillStyle = "black";
        g.beginPath();
        g.rect(0, 300, 1700, 32)
        g.closePath();
        g.fill();

    
        g.fillStyle = "grey";
        g.beginPath();
        g.rect(0, 270, 1700, 32)
        g.closePath();
        g.fill();

    
        g.fillStyle = "white";
        g.beginPath();
        g.rect(0, 315, 1700, 2)
        g.closePath();
        g.fill();

    
        g.fillStyle = "white";
        g.beginPath();
        g.arc(500, 115, 35, 0, 2 * Math.PI);
        g.fill();
        g.stroke();

    
        g.beginPath();
        g.arc(500, 175, 35, 0, 2 * Math.PI);
        g.fill();
        g.stroke();

    
        g.beginPath();
        g.arc(500, 235, 35, 0, 2 * Math.PI);
        g.fill();
        g.stroke();

    
        g.fillStyle = "black";
        g.beginPath();
        g.arc(515, 109, 5, 0, 2 * Math.PI);
        g.fill();
        g.stroke();

    
        g.beginPath();
        g.arc(485, 109, 5, 0, 2 * Math.PI);
        g.fill();
        g.stroke();

    
        g.fillStyle = "orange"
        g.beginPath();
        g.arc(500, 123, 5, 0, 2 * Math.PI);
        g.fill();
        g.stroke();
    
    
        g.fillStyle = "black";
        g.font = "30px Arial";
        g.fillText("Happy hoho", 330, 400);
    
        g.fillStyle = "black"
        g.beginPath();
        g.arc(500, 163, 5, 0, 2 * Math.PI);
        g.fill();
        g.stroke();
    
        g.fillStyle = "black"
        g.beginPath();
        g.arc(500, 186, 5, 0, 2 * Math.PI);
        g.fill();
        g.stroke();

        g.fillStyle = "grey";
        g.beginPath();
        g.rect(400, 180, 10, 100);
        g.closePath();
        g.fill();

        g.fillStyle = "yellow"
        g.beginPath();
        g.rect(380, 180, 50, 10);
        g.closePath();
        g.fill();

        g.fillStyle = "grey"
        g.beginPath();
        g.rect(380, 160, 50, 20);
        g.closePath();
        g.fill();
        

        g.fillStyle = "brown";
        g.beginPath();
        g.rect(700, 220, 40, 50);
        g.closePath();
        g.fill();

        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(720, 0);
        g.lineTo(640, 220);
        g.lineTo(800, 220);
        g.closePath();
        g.fill();


    
    
    }
    
    
    
    }
    
    let app = new App();
    app.runApplication();