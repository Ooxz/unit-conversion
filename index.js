let number = document.getElementById("number")
let displayLength = document.getElementById("length")
let displayVolume = document.getElementById("volume")
let displayMass = document.getElementById("mass")

number.addEventListener('input', convertAll)

function length() {
    let feet = (number.value * 3.28084).toFixed(3)
    let meter = (number.value / 3.28084).toFixed(3)
   displayLength.textContent = number.value + " meters" + " = " + feet + " feet" + " | " + number.value + " feet" + " = " + meter + "meters"
}



function volume() {
    let gallon = (number.value * 0.264172).toFixed(3)
    let liter = (number.value / 0.264172).toFixed(3)
    displayVolume.textContent = number.value + " liters" + " = " + gallon + " gallons" + " | " + number.value + " gallons" + " = " + liter + "liters"
}



function mass() {    
let kilogram = (number.value / 2.2).toFixed(3)
let pound = (number.value * 2.2).toFixed(3)
    displayMass.textContent = number.value + " kilos" + " = " + pound + " pounds" + " | " + number.value + " pounds" + " = " + kilogram + "kilograms"
}



function convertAll() {
    length()
    volume()
    mass()
}
convertAll()