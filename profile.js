function colorResult(event) {
    event.preventDefault()
    alert("blue.  I think")
}
function placeResult(event) {
    event.preventDefault()
    alert("Encinitas, California.  Just north of San Diego.  I'm moving there in a few years")
}
function ritualResult(event) {
    event.preventDefault()
    alert("Probably getting fast food after a workout.  Sort of contradictory but when I even think about doing it the floodgates fill with dopamine")
}



let colorButton = document.querySelector("#color")
let placeButton = document.querySelector("#place")
let ritualButton = document.querySelector("#ritual")

colorButton.addEventListener("click", colorResult)
placeButton.addEventListener("click", placeResult)
ritualButton.addEventListener("click", ritualResult)