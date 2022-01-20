let Persons = [
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

//let's start from the top element to the bottom one
function changeReview(person) {
		image.src = Persons[person].img;
		name.innerText = Persons[person].name;
		review.innerText = Persons[person].review;
		job.innerText = Persons[person].job;
}

let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
		changeReview(currentPerson);
		currentPerson++;
		if (currentPerson > Persons.length -1)	currentPerson = 0;
});

prevBtn.addEventListener('click', () => {
  	changeReview(currentPerson);  	
  currentPerson--;
  	if (currentPerson < 0) currentPerson = Persons.length -1;
});
