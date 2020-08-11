"use strict";


runprogram ();


function runprogram () {  

    let randomDestination = ['Queens, NY', 'Tampa, FL', 'Virginia Beach, VA', 'Napa Valley, CA'];
    let randomNumber = randomDestination[Math.floor(Math.random() * randomDestination.length)];{
    
        console.log(randomNumber);


    let randomRestaurant = selectRandomRestaurant();
    }
}

    
function selectRandomRestaurant () {

    let randomRestaurant = ['Firehouse Subs', 'Applebees', 'Olive Garden', 'Bonefish Grill'];
    let randomNumbers = randomRestaurant[Math.floor(Math.random() * randomRestaurant.length)];{
    
        console.log(randomNumbers);


    let randomTranspo = selectRandomTranspo ();
    }
}
    

function selectRandomTranspo () {

    let randomTranspo = ['Subway', 'Airplane', 'Boat', 'Dragon'];
    let randomNumbersS = randomTranspo[Math.floor(Math.random() * randomTranspo.length)];{
            
         console.log(randomNumbersS);
       
         
    let randomEntertainment = selectRandomEntertainment ();
    }
}


function selectRandomEntertainment () {

    let randomEntertainment = ['Movies', 'Mini Golf', 'Baseball Game', 'Drinks'];
    let randomNumbersSS = randomEntertainment[Math.floor(Math.random() * randomEntertainment.length)];{
                
        console.log(randomNumbersSS);
          
        
    let userInput = reSelectRandomChoices ();
    }
}

        
function reSelectRandomChoices () {

    let userInput = prompt("Enter Yes if you are satisfied with your trip, if not, enter No");

    if(userInput === "Yes"){
        console.log("The user is satisfied with their trip!");
        alert("Your trip is booked! First you will start with a romantic, yet thrilling " + randomNumbersS + " ride, where you will be whisked away to " + randomNumbers + " for the most elegant of cuisines in all of " + randomNumbers + ". Now lets not forget about " + randomNumber + "!");

}       
    else if(userInput === "No"){
        console.log("User is not satisfied with trip.")
        
    }
}


function switchCase () {

    switch(userInput){
        case "Change Destination":
            alert("your new destination choice is " + randomNumber + 1);
            console.log(randomNumber + 1);
            break;
        case "Change Restaurant":
            alert("Your new restaurant choice is " + randomNumbers + 1);
            console.log(randomNumbers + 1);
            break;
        case "Change Transportation":
            alert("Your new transportation will be: " + randomnumbersS + 1);
            console.log(randomNumbersS + 1);
            break;
        case "Change Entertainment":
            alert("Your new entertainment will me " + randomNumbersSS + 1 );
            break;
        case "I am happy with my random day choices!":
            alert("Check the console for your super cool trip!");
            console.log("User is happy with random trip!");
            break;
        default:
            console.log()


    }










}