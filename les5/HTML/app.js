class App 
{
    runApplication()
    {
        console.log("hello");

        let arr = ["Drake", "C418", "Knucks", "MF DOOM", "MADVILLAIN"];
        console.log(arr)

        let headers = document.getElementById("bandName");

        for(let i=0; i< Headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
        
    }
    

}

let app = new App();
app.runApplication();