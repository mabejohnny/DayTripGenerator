"use strict";


function destinationLogic () {

    let randomDestination = ['Queens, NY', 'Tampa, FL', 'Virginia Beach, VA', 'Napa Valley, CA'];
    let destinationChoice = randomDestination[Math.floor(Math.random() * randomDestination.length)];

    let randomRestaurant = ['Firehouse Subs', 'Applebees', 'Olive Garden', 'Bonefish Grill'];
    let restaurantChoice = randomRestaurant[Math.floor(Math.random() * randomRestaurant.length)];

    let randomTranspo = ['Subway', 'Airplane', 'Boat', 'Dragon'];
    let transpoChoice = randomTranspo[Math.floor(Math.random() * randomTranspo.length)];

    let randomEntertain = ['Movies', 'Mini Golf', 'Baseball Game', 'Drinks'];
    let entertainChoice = randomEntertain[Math.floor(Math.random() * randomEntertain.length)];

}

runprogram ();




function runProgram(){

    selectrandomDestination();
    selectRandomRestaurant();
    selectRandomTranspo();
    selectRandomEntertain();
    reSelectRandomChoices();
    getUserInputForDestinationChoices ();
}

function selectrandomDestination() {  

    let randomDestination = ['Queens, NY', 'Tampa, FL', 'Virginia Beach, VA', 'Napa Valley, CA'];
    let destinationChoice = randomDestination[Math.floor(Math.random() * randomDestination.length)];{
    
        console.log("your going to visit the exotic " + destinationChoice);
        let randomRestaurant = selectRandomRestaurant();
       
        return destinationChoice; 


    }
}

    
function selectRandomRestaurant () {

    let randomRestaurant = ['Firehouse Subs', 'Applebees', 'Olive Garden', 'Bonefish Grill'];
    let restaurantChoice = randomRestaurant[Math.floor(Math.random() * randomRestaurant.length)];{
    
        console.log("You will dine at the world famous " + restaurantChoice);
        let randomTransportation = selectRandomTransportation ();

        return restaurantChoice;


    }
}
    
function selectRandomTransportation () {

    let randomTransportation = ['Subway', 'Airplane', 'Boat', 'Dragon'];
    let transportationChoice = randomTransportation[Math.floor(Math.random() * randomTransportation.length)];{
            
         console.log("First class all the way while you travel around on a " + transportationChoice);
         let randomEntertainment = selectRandomEntertainment ();
         return transportationChoice;
         

    }
}


function selectRandomEntertainment () {

    let randomEntertainment = ['Movies', 'Mini Golf', 'Baseball Game', 'Drinks'];
    let entertainChoice = randomEntertainment[Math.floor(Math.random() * randomEntertainment.length)];{
                
        console.log("Your entertainment for the evening will be " + entertainmentChoice);
        let userInput = reSelectRandomChoices ();
       
        return entertainmentChoice
  
        
    }
}

        
function reSelectRandomChoices () {

    let userInput = prompt("Enter Yes if you are satisfied with your trip, if not, enter No");

        if(userInput === "Yes"){
            console.log("The user is satisfied with their trip!");
            alert("Your trip is booked!");

}       
         else if(userInput === "No") {
            switchCase ()
        
    }
}


function getUserInputForDestinationChoices () {

    let userInput;
    userInput = prompt("Enter 1 to change destination. 2 to change your restaurant. 3 to change your transportation. 4 to change your entertainment. 5 if you have no idea how you got here, but know you wanna leave")
    
    switch(userInput)
    {
        case "1":
            
            let destinationChoice = selectrandomDestination();
            alert("your new destination choice is " + destinationChoice);
            console.log("user changed there destination to: " + destinationChoice);
            break;
        case "2":
           let newRestaurant = selectRandomRestaurant();
            alert("Your new restaurant choice is " + restaurantChoice);
            console.log("user changed their restaurant to: " + restaurantChoice);
            break;
        case "3":
            let newTransportation = selectRandomTransportation();
            alert("Your new transportation will be: " + transportationChoice);
            console.log("user changed their transportation to: " + transportationChoice);
            break;
        case "4":
            let newEntertainment = selectRandomEntertainment();
            alert("Your new entertainment will me " + entertainmentChoice);
            console.log("user changed their entertainment to " + entertainmentChoice);
            break;
        case "5":
            alert("That's okay! Your still alright in our book!");
            console.log("User is happy with random trip!");
            break;
        default:
            console.log("I guess the user does not understand");


    }
}