class App{
    runApplication(){
        console.log("hello world")

        this.rollStat()
        console.log(stat1)
    }

    rollStat(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();

        let diceList = [d1, d2, d3, d4];

        diceList.sort; 
        let som = diceList[1] + diceList[2] + diceList[3]
        console.log(som)
        return som;
    }
    rollDice(){
        let dice = Math.floor(Math.random()* 6 + 1);
        return dice;
    }


    
}

let app = new App();
app.runApplication();