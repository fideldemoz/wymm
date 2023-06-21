(function app () {
	"use strict"
	const no = document.querySelector(".no");
	const yes = document.querySelector(".yes");
	const text = document.querySelector("h1");
	const main = document.querySelector("main");

	no.addEventListener("mouseenter", () => {
		no.style.position = 'absolute';
		const left = Math.random()*95;
		const top = Math.random()*90;
		no.style.left = `${left}%`;
		no.style.top = `${top}%`;
	})
	no.addEventListener("click", () => {
		text.textContent = "You broke my heart";
		main.style.background = 'black';
		text.style.color = 'white';
		yes.style.display = 'none';
		no.style.display = 'none';
	})
	yes.addEventListener("click", () => {
		text.textContent = "You are my love";
		main.classList.add("accepted");
		text.style.color = 'white';
		yes.style.display = 'none';
		no.style.display = 'none';
	})
})()

