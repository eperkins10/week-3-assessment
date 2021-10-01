console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Success! You'll hear back from us.. if you got in")
}

function niceToUser(event) {
	event.preventDefault()

	alert("You look amazing today")
}


let form = document.querySelector('form#contact');
let catPic = document.querySelector("#cat-picture")

form.addEventListener('submit', handleSubmit);
catPic.addEventListener("mouseover", niceToUser)