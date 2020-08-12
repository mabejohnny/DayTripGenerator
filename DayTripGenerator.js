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
//pull destination logic out of runporgram and into its own function
//Add a return to each individual function
//Recall the appropriate function in each case in the switchcase

function runprogram () {  

    let randomDestination = ['Queens, NY', 'Tampa, FL', 'Virginia Beach, VA', 'Napa Valley, CA'];
    let destinationChoice = randomDestination[Math.floor(Math.random() * randomDestination.length)];{
    
        console.log("your going to visit the exotic " + destinationChoice);

        return destinationChoice; 

    let randomRestaurant = selectRandomRestaurant();
    let randomTranspo = selectRandomTranspo ();
    }
}

    
function selectRandomRestaurant () {

    let randomRestaurant = ['Firehouse Subs', 'Applebees', 'Olive Garden', 'Bonefish Grill'];
    let restaurantChoice = randomRestaurant[Math.floor(Math.random() * randomRestaurant.length)];{
    
        console.log("You will dine at the world famous " + restaurantChoice);

        return restaurantChoice;
    

    }
}
    

function selectRandomTranspo () {

    let randomTranspo = ['Subway', 'Airplane', 'Boat', 'Dragon'];
    let transpoChoice = randomTranspo[Math.floor(Math.random() * randomTranspo.length)];{
            
         console.log("First class all the way while you travel around on a " + transpoChoice);
        
         return transpoChoice;
         
    let randomEntertainment = selectRandomEntertain ();
    let userInput = reSelectRandomChoices ();
    }
}


function selectRandomEntertain () {

    let randomEntertain = ['Movies', 'Mini Golf', 'Baseball Game', 'Drinks'];
    let entertainChoice = randomEntertain[Math.floor(Math.random() * randomEntertain.length)];{
                
        console.log("Your entertainment for the evening will be " + entertainChoice);
          
        return entertainChoice
  

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


function switchCase () {

    let userInput;
    userInput = prompt("Enter 1 to change destination. 2 to change your restaurant. 3 to change your transportation. 4 to change your entertainment. 5 if you have no idea how you got here, but know you wanna leave")
    
    switch(userInput)
    {
        case "1":
            return destinationChoice;
            alert("your new destination choice is " + destinationChoice);
            console.log("user changed there destination to: " + destinationChoice);
            break;
        case "2":
            return restaurantChoice;
            alert("Your new restaurant choice is " + restaurantChoice);
            console.log("user changed their restaurant to: " + restaurantChoice);
            break;
        case "3":
            return transpoChoice;
            let newTrans = selectRandomTranspo();
            alert("Your new transportation will be: " + transpoChoice);
            console.log("user changed their transportation to: " + transpoChoice);
            break;
        case "4":
            return entertainChoice;
            alert("Your new entertainment will me " + entertainChoice);
            console.log("user changed their entertainment to " + entertainChoice);
            break;
        case "5":
            alert("That's okay! Your still alright in our book!");
            console.log("User is happy with random trip!");
            break;
        default:
            console.log("I guess the user does not understand");


    }
}