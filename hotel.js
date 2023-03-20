

const OcupatedRooms = [];
const maxRooms = 20;

//numRooms and timeCheckIn are the variables that are modified, 
// that is, the variables that the user enters.
let numRooms = 3;       
// the timeCheckIn variable is in military time
let timeCheckIn = 11;  


if(timeCheckIn < 12){ //first it is verified that the registration time is correct
    if (numRooms <= maxRooms ) {
        let roomsAvailable =  maxRooms - numRooms ;
        console.log('There is availability of rooms');
        console.log('The reservation is being processed, now there are '+ roomsAvailable+' rooms left');
            if(OcupatedRooms.length + numRooms <= maxRooms) {
                for (let i = 0; i < numRooms; i++) {
                    OcupatedRooms.push(i);
                }
                console.log('Successful reservation. Your assigned rooms are: ' + OcupatedRooms);
            } else {
                console.log("There are not enough rooms available for your reservation.");
            }
        } else{
        console.log("Sorry, there are not many rooms available.");
        } 
}else {
console.log("Sorry, the reservation must be made before 12 pm.");
}

