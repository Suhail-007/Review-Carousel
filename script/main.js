let Persons = [
		{
				name: "Suhail Qureshi",
				job: "Front-End Developer",
				img: "Images/Picsart_22-01-19_14-16-37-406.png",
				review: "docendi deseruisse legere falli volumus ludus fermentumpericula errem nisi reprehendunt tortor nibh vitae esse alienum offendit brute viris rutrum non veri adipiscing aliquip adipiscing oporteat qui contentiones suas quis iaculis omittantur elitr quaestio antiopam aliquet graece."			
		},
		{
				name: "Emma Cook",
				job: "UI/UX Designer",
				img: "Images/Person1.jpg",
				review: "mediocritatem scripta dolorum docendi himenaeos torquent diam quisque idque est veri maluisset gubergren posse pertinax dicant tritani definitiones posse quam."
		},
		{
				name: "Ed Sheeran",
				job: "Web Designer",
				img: "Images/Person2.jpg",
				review: "docendi liber mel urna mel maluisset ludus suavitate urbanitas prodesset mattis delicata repudiandae moderatius solum."
		},
		{
				name: "Anni taylor",
				job: "Full Stack Developer",
				img: "Images/Person3.jpg",
				review: "hac expetenda posuere quod convenire parturient explicari definiebas magna molestie viris quot cu quis viverra electram ante facilisis intellegebat tincidunt sententiae parturient patrioque harum molestiae duo hendrerit postea mucius cetero."
		}
]

//declare some variables
let image, name, review, job;
image = document.querySelector('.image > img');
name = document.querySelector('[data-name]');
review = document.querySelector('[data-review]');
job = document.querySelector('[data-job]');

//counter variable
let currentPerson = 0;


let reviewDiv = document.querySelector('.review');

function SlideIn() {
		reviewDiv.animate([
				//keyframes
				{transform: 'translateX(-20em)', opacity: 0},
				{transform: 'translateX(0)', opacity: 1}
		],
		{
				//animation methods
				duration: 900,
				fill: 'forwards'
		})
		
				job.animate([
				//keyframes
				{transform: 'translateX(20em)', opacity: 0},
				{transform: 'translateX(0)', opacity: 1}
		],
		{
				//animation methods
				duration: 900,
				fill: 'forwards'
		})
}

function SlideInReverse() {
		reviewDiv.animate([
				//keyframes
				{transform: 'translateX(20em)', opacity: 0},
				{transform: 'translateX(0)', opacity: 1}
		],
		{
				//animation methods
				duration: 900,
				fill: 'forwards'
		})
		
				job.animate([
				//keyframes
				{transform: 'translateX(-20em)', opacity: 0},
				{transform: 'translateX(0)', opacity: 1}
		],
		{
				//animation methods
				duration: 900,
				fill: 'forwards'
		})
}

//let's start from the top element to the bottom one
function changeReview(person) {
		image.src = Persons[person].img;
		name.innerText = Persons[person].name;
		review.innerText = Persons[person].review;
		job.innerText = Persons[person].job;
}

window.addEventListener('DOMContentLoaded', () => {
		changeReview(currentPerson)
})

let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
		currentPerson++;
		if (currentPerson > Persons.length -1) {	currentPerson = 0; }
		SlideIn();
		changeReview(currentPerson);
});

prevBtn.addEventListener('click', () => {
  currentPerson--;
  	if (currentPerson < 0) {currentPerson = Persons.length -1;}
  	SlideInReverse();
  	changeReview(currentPerson);  	
});
