"use strict";


runprogram ();


function runprogram () {  

    let randomDestination = ['Queens, NY', 'Tampa, FL', 'Virginia Beach, VA', 'Napa Valley, CA'];
    let randomNumber = randomDestination[Math.floor(Math.random() * randomDestination.length)];{
    
        console.log("your going to visit the exotic " + randomNumber);


    let randomRestaurant = selectRandomRestaurant();
    }
}

    
function selectRandomRestaurant () {

    let randomRestaurant = ['Firehouse Subs', 'Applebees', 'Olive Garden', 'Bonefish Grill'];
    let randomNumbers = randomRestaurant[Math.floor(Math.random() * randomRestaurant.length)];{
    
        console.log("You will dine at the world famous " + randomNumbers);


    let randomTranspo = selectRandomTranspo ();
    }
}
    

function selectRandomTranspo () {

    let randomTranspo = ['Subway', 'Airplane', 'Boat', 'Dragon'];
    let randomNumbersS = randomTranspo[Math.floor(Math.random() * randomTranspo.length)];{
            
         console.log("First class all the way while you travel around on a " + randomNumbersS);
       
         
    let randomEntertainment = selectRandomEntertainment ();
    }
}


function selectRandomEntertainment () {

    let randomEntertainment = ['Movies', 'Mini Golf', 'Baseball Game', 'Drinks'];
    let randomNumbersSS = randomEntertainment[Math.floor(Math.random() * randomEntertainment.length)];{
                
        console.log("Your entertainment for the evening will be " + randomNumbersSS);
          
        
    let userInput = reSelectRandomChoices ();
    }
}

        
function reSelectRandomChoices () {

    let userInput = prompt("Enter Yes if you are satisfied with your trip, if not, enter No");

        if(userInput === "Yes"){
            console.log("The user is satisfied with their trip!");
            alert("Your trip is booked!");

}       
         else if(userInput === "No"){
            switchCase ()
            console.log("User is not satisfied with trip.")
        
    }
}


function switchCase () {

    switch(userInput){
        case "Change Destination":
            alert("your new destination choice is " + randomNumber + 1);
            console.log("user changed there destination to: " + randomNumber + 1);
            break;
        case "Change Restaurant":
            alert("Your new restaurant choice is " + randomNumbers + 1);
            console.log("user changed their restaurant to: " + randomNumbers + 1);
            break;
        case "Change Transportation":
            alert("Your new transportation will be: " + randomnumbersS + 1);
            console.log("user changed their transportation to: " + randomNumbersS + 1);
            break;
        case "Change Entertainment":
            alert("Your new entertainment will me " + randomNumbersSS + 1);
            console.log("user changed their entertainment to " + randomNumbersSS + 1)
            break;
        case "Nevermind. I hit the wrong button!":
            alert("Thats alright! Your still alright in our book!");
            console.log("User is happy with random trip!");
            break;
        default:
            console.log("I guess the user does not understand");


    }
}