//ques1
let ques1 = document.getElementById('text');
console.log(ques1);

//ques2
let ques2 = document.getElementsByTagName('h1');
console.log(ques2);

//ques3
let ques3 = document.getElementsByClassName('box');
console.log(ques3);

//ques4
let ques4 = document.getElementById('changeHeading');
ques4.addEventListener('click', () => {
	ques4.innerText = 'Hello World';
});

//ques5 - method1
function replaceText() {
	document.getElementById('replaceContent').textContent =
		'Welcome to Elevation academy';
}
//method2
let ques5 = document.getElementById('replaceContent');
document.getElementsByTagName('button')[0].addEventListener('click', () => {
	ques5.textContent = 'Welcome to Elevation academy';
});

//ques6
let ques6 = (ques2[6].style.color = 'red');
console.log(ques6);
ques2[6].setAttribute('id', 'heading');
console.log(ques2[6].getAttribute('id'));

//ques7
let ques7 = document.querySelector('.flex');
document.getElementsByTagName('button')[1].addEventListener('click', () => {
	ques7.style.flexDirection = 'column';
});

//ques9
function time() {
	let ques9 = new Date();
	let hrs = ques9.getHours();
	let mins = ques9.getMinutes();
	let secs = ques9.getSeconds();
	document.getElementsByClassName(
		'timerClock'
	)[0].innerHTML = `<h1>TIME - ${hrs} : ${mins} : ${secs}</h1>`;
}
setInterval(() => {
	time();
}, 1000);
//time();
