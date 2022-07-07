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
        this.maintenance = 0
    }
}

// I think we have the class situation set. 

const buttonBegin = document.querySelector('#start')
const transportSystem = new TransporGatchi ("");
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

        if(transportSystem.passenger === -2) {
            alert(`You haven't kept up with demand! Your residents have RIOTED.`);
            clearInterval(passInterval);
        }
        }, 2750)  
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

        if(transportSystem.ontime === -2) {
            alert(`Your transportation system is woefully off-schedule! Your residents have RIOTED.`);
            clearInterval(passInterval);
        }
        }, 2500)  
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

        if(transportSystem.maintenance === 12) {
            alert(`You failed to keep up with maintenance of your public transit system! Your residents have RIOTED.`);
            clearInterval(passInterval);
        }
        }, 1750)  

        const lightsOn = document.querySelector('#lights');
        let lightsImage = 0;

        maintenanceButton.addEventListener("click", () =>{
            transportSystem.adjustMaintenance();
            const maintenanceID = document.querySelector ('#Maintenance-Show');
            passInterval.innerHTML = `Maintenance: ${transportSystem.maintenance}`
        })
        maintenanceButton.addEventListener('click', function(){
            document.querySelector(`#lights`).src='imgs/maintenance.png'
            lightsOn.style.display = 'block';
            setTimeout(hide, 1000);
            function hide() {
                lightsOn.style.display = 'none';
                document.querySelector(`#lights`).src=''
    
            }
        });

    },

                /* lightsImage = (lightsImage + 1) % lightsOn.length; */

    setAge() {
        const intervaID = setInterval(() => {
            const ageID = document.querySelector('#Age-Show')
            ageID.innerHTML = `Age: ${transportSystem.age}`;
            transportSystem.age ++;

            if(transportSystem.age == 1){
                window.confirm(`No one can ride a paper airplane! The city has granted you a taxi permit!`);
                document.querySelector(`#transit`).src='imgs/taxi.gif';
            }
            
            if(transportSystem.age == 5) {
                window.confirm(`Let's make taxi fares a thing of the past! You've upgraded your city's transport to trains and subways!`)
                document.querySelector(`#transit`).src='imgs/train.png';
            }

            if(transportSystem.age == 12){
                window.confirm(`The public's trust in you grows. You've invested money into bringing hovercars to your city!`)
                document.querySelector(`#transit`).src='imgs/hover.png'
            }

            if(transportSystem.age == 20){
                window.confirm(`You've discovered teleportation! Your citizens rejoice at instantaneous travel!`)
                document.querySelector(`#transit`).src=``
                document.querySelector(`#portal`).src='imgs/portal.gif'
            }

        }, 3250)
    },

    setName () {
        transportSystem.name = prompt(`What is your public transit system's name?`, "Enter your transit system's name")
        const nameID = document.querySelector(`.charName`);
        nameID.innerHTML = (`${transportSystem.name} Transport System`)
    },

    gameBegin(){
        newGame.setName();
        newGame.setPassengers();
        newGame.setSchedule();
        newGame.setMaintenance();
        newGame.setAge();
    }
}
///Finishing objects

///Starting the game

buttonBegin.addEventListener("click", (event) =>{
    event.target.disabled = true;
    newGame.gameBegin();
})


console.log(transportSystem.passenger)