class App 
{
    runApplication()
    {
        let getal = this.telOp(8, 15); 
    }
    printmario()
    {
        console.log("MARIO!!");
    }
    bwaha()
    {
        return "BWAHAHA!!!";
    }
    telOp(a,b)
    { 
        console.log(a + b);
    }
}

let app = new App();
app.runApplication();
app.printmario();
let b = app.bwaha();
console.log(b);