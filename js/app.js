console.log("TransporGatchi!")
console.log("Hello there. I hope you haven't come here to cheat ;-)")

//Creation of primary class

class Transport {
    constructor (name, passenger, ontime, maintenance, age) {
        this.name = name;
        this.passenger = passenger;
        this.ontime = ontime;
        this.maintenance = maintenance;
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


const transportSystem = new TransporGatchi ("k");
const passengerButton = document.querySelector('#passengers')
const scheduleButton = document.querySelector('#schedule')
const maintenanceButton = document.querySelector('#maintenance')
//Testing out the intervals

const newGame = {
    setPassengers(){
        console.log("Inside setPassengers")
        let passInterval = setInterval(() => {
            let passengerID = document.querySelector('#Passengers-Carry');
            console.log(passengerID)
        passengerID.innerHTML = `Passengers: ${transportSystem.passenger}`;

        transportSystem.passenger --; 

        if(transportSystem.passenger ===0) {
            alert(`You haven't kept up with demand! Your residents have RIOTED.`);
            clearInterval(passInterval);
        }
        }, 2000)  
        passengerButton.addEventListener("click", () =>{
            transportSystem.addPassenger();
            const passengerID = document.querySelector ('#Passengers-Carry');
            passInterval.innerHTML = `Passengers: ${transportSystem.passenger}`
        })
    },

    setSchedule(){
        console.log("Inside setSchedule")
        let passInterval = setInterval(() => {
            let scheduleID = document.querySelector('#Schedule-Show');
            console.log(scheduleID)
        scheduleID.innerHTML = `Schedule: ${transportSystem.ontime}`;

        transportSystem.ontime --; 

        if(transportSystem.ontime ===0) {
            alert(`Your transportation system is woefully off-schedule! Your residents have RIOTED.`);
            clearInterval(passInterval);
        }
        }, 2000)  
        scheduleButton.addEventListener("click", () =>{
            transportSystem.adjustSchedule();
            const scheduleID = document.querySelector ('#Schedule-Show');
            passInterval.innerHTML = `Schedule: ${transportSystem.ontime}`
        })
    },

    setMaintenance(){
          let passInterval = setInterval(() => {
            let maintenanceID = document.querySelector('#Maintenance-Show');
            maintenanceID.innerHTML = `Maintenance : ${transportSystem.maintenance}`;

        transportSystem.maintenance ++; 

        if(transportSystem.maintenance === 11) {
            alert(`You failed to keep up with maintenance of your public transit system! Your residents have RIOTED.`);
            clearInterval(passInterval);
        }
        }, 2000)  
        maintenanceButton.addEventListener("click", () =>{
            transportSystem.adjustMaintenance();
            const maintenanceID = document.querySelector ('#Maintenance-Show');
            passInterval.innerHTML = `Maintenance: ${transportSystem.maintenance}`
        })
    },
}

newGame.setPassengers()
newGame.setSchedule()
newGame.setMaintenance()
console.log(transportSystem.passenger)