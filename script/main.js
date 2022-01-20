import {Persons} from "./array.js"

document.body.addEventListener('DOMContentLoaded', () => {
		document.querySelector('[data-name]').innerHTML = Persons[0].name
})