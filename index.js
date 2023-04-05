/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let convertbtn = document.getElementById("convertButton")
let valueInput = document.getElementById("valueInput")

let lengthDescription = document.getElementById("lengthDescription")
let volumeDescription = document.getElementById("volumeDescription")
let massDescription = document.getElementById("massDescription")

convertbtn.addEventListener("click", function()
{
    convertion()
})

function convertion()
{
    let userInput = valueInput.value

    let userInputImperialMeter = userInput * 3.281
    let userInputMetricMeter = userInput * 0.304

    let userInputImperialVolume = userInput * 0.264
    let userInputMetricVolume = userInput * 3.785

    let userInputImperialMass = userInput * 2.204
    let userInputMetricMass = userInput * 0.453
    

    lengthDescription.innerHTML =`${userInput} meters = ${userInputImperialMeter.toFixed(3)} feet | ${userInput} feet = ${userInputMetricMeter.toFixed(3)} meters`
    volumeDescription.innerHTML = `${userInput} liters = ${userInputImperialVolume.toFixed(3)} gallons | ${userInput} gallons = ${userInputMetricVolume.toFixed(3)} liters`
    massDescription.innerHTML = `${userInput} kilos = ${userInputImperialMass.toFixed(3)} pounds | ${userInput} pounds = ${userInputMetricMass.toFixed(3)} kilos`
}