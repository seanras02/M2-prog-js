class App 
{
    runApplication()
    {
        console.log("hello world");
        let appNaam = "waow";
        let versienummer = 1.0
        let datumversie = "24/11/2022"
        let autheur = "Sean"
        let copyright = "All rights reserved by Sean (no copy pls)";
        let distributeur = "Ik";
        let darkmode = true;
        console.log(appNaam, versienummer, autheur, copyright, distributeur, darkmode, datumversie)
    }
}

let app = new App();
app.runApplication();