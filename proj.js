function calculateFare() {

    let pickup = parseFloat(document.getElementById("pickup").value);
    let dropoff = parseFloat(document.getElementById("dropoff").value);
    let basefare = 50;
    let perKMrate = 15;
    let baseKM = 2;
    let discount = document.getElementById("disc").checked;

    let distance = Math.max(Math.abs(dropoff - pickup), 0);
    let extraKM = Math.max(distance - baseKM, 0);

    let fare = basefare + extraKM * perKMrate;

    fare = fare * (1 - 0.2 * discount);

    document.getElementById("DisplayAns").innerHTML =
        "Total Fare: ₱ " + fare.toFixed(2);
    
    if(pickup === dropoff)
    document.getElementById("DisplayAns").innerHTML =
    "Pickup and Dropoff are the same. Fare: ₱0.00";
    return;

}

function registerUser(){

let first = document.getElementById("firstName").value;
let last = document.getElementById("lastName").value;

if(first === "" || last === ""){
alert("Please fill out the form.");
return;
}

window.location.href = "confirmation.html";

}
