const modeToggle = document.querySelector(".mode")
const button = document.querySelector("button")

button.addEventListener("click", () => {
	modeToggle.classList.toggle("on");
	changeText()

})

function changeText() {
	const title = document.querySelector("h3")
	const buttonText = document.querySelector("button")

	if (modeToggle.classList.contains("on")) {
		title.innerHTML = "Dark Mode ON"
		buttonText.innerHTML = "Light Mode"
	} else {
		modeToggle.classList.remove("on")
		title.innerHTML = "Light Mode ON"
		buttonText.innerHTML = "Dark Mode"
	}
}