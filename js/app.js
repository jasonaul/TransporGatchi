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
    constructor (name, passenger, ontime, maintenance, age){
        super(name, passenger, ontime, maintenance, age)
        this.name = name;
        this.passenger = 10;
        this.ontime = 10;
        this.maintenance = 0;
        this.age = 0;
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


const transportSystem = new TransporGatchi ("")

//Testing out the intervals

const newGame = {
    setPassenger(){
        const passInterval = setInterval(() => {
            const passengerID = document.querySelector("#Passengers");
        passengerID.innerHTML = `Passengers: ${transportSystem.passenger}`;

        transportSystem.passenger -- 

        if(transportSystem.passenger <=0) {
            alert(`You haven't kept up with demand! Your residents have REVOLTED.`);
            clearInterval(passInterval);
        }
        }, 100) 
    }
}

console.log(transportSystem.passenger)