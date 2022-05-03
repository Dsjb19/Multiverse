
class user{
    constructor (userName,age,currentUserLocation,location,ready){
        let location =  ['Richmond', 'Battersea', 'Blackheath', 'East Finchley', 'Highbury'];
        let userName = prompt('Enter your name: ');
        let age = prompt('Enter your age:');
        let currentUserLocation = prompt('Enter your location:');
        let locationCheck = location.islocation(currentUserLocation);
        if (locationCheck = false){
            console.log("Sorry we currently don't service this area!" , '\n',  'Please see below for the areas we service!', '\n', location);
        }else{
            let ready= true;
        }
        }

    }

class app{
    super(userName,age,location)
    constructor (cardNumber, sortCode, cvv){
        let cardNumber = prompt('Enter your card number: ');
        let sortCode = prompt('Enter your sort code:');
        let cvv = prompt('Enter your cvv:');
    }
}

class chargingStation{
    super(location,avalibleScooters,chargingScooters, ready)
    constructor (takenScooters){
          let takenScooters = [];
          if (ready = true){
              takenScooters.push(avalibleScooters[0]);
              avalibleScooters.remove[0];
              await delay(32);
              avalibleScooters.push(takenScooters[0])
              takenScooters.remove[0];
          }
          
    }

}

class scooter{
    super(location)
    constructor (scooterName, scooterLocation, chargeTime, brokenScooter, range){
        let scooterName = ['Xiaomi', 'Segway','Voromotors','Kugoo', 'Razor']
        let chargeTime = [120,120,120,120,120]
        for(let i = 0; i < chargeTime.length ; i++);
            if (chargeTime[i] = 120){
               avalibleScooters.push(scooterName[i]);
            }else{
                chargingScooters.push(scooterName[i]);
            }
        let avalibleScooters = [];
        let chargingScooters = [];
        let brokenScooter = [false,false,false,false,false];
        let brokenScooterList = [];
        for(let i = 0; i< brokenScooter.length; i++){
            if(brokenScooter[i] = true){
                brokenScooterList.push(scooterName[i]);
            }
        }
        const range = 32;
    }


}

class maintenence{
    super (location,brokenScooterList)
    constructor (workerName, working){
        let workerName = ['David','Shawn','Zoe','Max','Cory'];
        let working = [];
            if(brokenScooterList.length > 1) {
                for(let i = 0; i < brokenScooterList; i++){
                    working.push(workerName[i]);
                    workerName.remove[i];
                    await delay(5);
                    workerName.push(working[i]);
                    working.remove[i];
                    avalibleScooters.push(brokenScooterList[i]);
                    brokenScooterList.remove[i]; 
                }

            }

        }

    }
