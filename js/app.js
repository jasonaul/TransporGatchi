console.log("TransporGatchi!")
console.log("Hello there. I hope you haven't come here to cheat ;-)")

//Creation of primary class

class Transport {
    constructor (name, passenger, ontime, maintenance, age) {
        this.name = name;
        this.passenger = passenger;
        this.ontime = ontime;
        this.age = age
    }

}

// End of primary class

// Class extends

class TransporGatchi extends Transport {
    constructor (name, passenger = 10, ontime = 10, maintenance = 0, age = 0){
        this.name = name;
        this.passenger = passenger;
        this.ontime = ontime;
        this.maintenance = maintenance;
        this.age = age;
    }
    addPassenger(){
        this.passenger ++
    }
    adjustSchedule(){
        this.ontime ++
    }
    adjustMaintenance(){
        this.maintenance --
    }
}

// I think we have the class situation set. 
