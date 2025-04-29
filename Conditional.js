

console.log("Type of secretNumber:", typeof secretNumber);
console.log("Type of userGuess:", typeof userGuess);
console.log()


let tshirtPrice=500
let quantity=3
let totalCoast=(tshirtPrice*quantity)
console.log(totalCoast)
console.log()

function checkAge(Age){
    if(Age>=18){
        return"Allowed to dine alone"
    }
    else if(Age<18){
        return"Not allowed to dine alone"
    }
}
console.log(checkAge(1))
console.log()


function checkAge3(Age){
    if(Age<=12&&isWednesday===true)
        return"Discount applied !"
    else if(Age>12){
        return"No discount"
    }
}
let age3=10
let isWednesday=true
console.log(checkAge3(12))
console.log()


let isMember = false;
let orderAmount = 2500;
let isLoggedIn = false;

if (isMember === true || orderAmount > 2000) {
  console.log("You qualify for free shipping");
}


if (isLoggedIn === false) {
  console.log("Please log in to continue")}


        
        let temperature = 25;

        
        if (temperature >= 30) {
            console.log(" Wear light clothes.");
            
            
        } else if (temperature >= 20 && temperature < 30) {
            console.log("carry a light jacket.");
            
        } else {
            console.log("Wear a warm jacket.");
            
        }
    
