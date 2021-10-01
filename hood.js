let randomFood = document.querySelector("#random")


function randomChoice(event) {
    event.preventDefault()
    
    let food = ["McDonalds", "Wendy's", "Betos"]
    const randomElement = food[(Math.random() * food.length)|0];
    alert(randomElement)

}

randomFood.addEventListener("click", randomChoice)