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

    let userInput = prompt("If you are not satisfied with your trip, please enter what you would like to change");

    if(userInput === "Destination"){
        console.log(randomNumber + 1);
        alert("Your new destination pick is " + randomNumber, "I have also logged it in the console");

}       
    else if(userInput === "Restaurant"){
        console.log(randomNumbers + 1)
        alert("Your new restaurant pick is " + randomNumbers, "I have also logged it in the console");
    }
}


function switchCase () {










}