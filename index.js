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
	if (count === 0) {
		ques4.innerText = 'Hello World';
		count = 1;
	} else {
		ques4.innerText = 'Hello';
		count = 0;
	}
});

//ques5 - method1
let change = true;
function replaceText() {
	if (change) {
		document.getElementById('replaceContent').textContent =
			'Welcome to Elevation academy';
		change = false;
	} else {
		document.getElementById('replaceContent').textContent = 'Hello world';
		change = true;
	}
}
//method2
let ques5 = document.getElementById('replaceContent');
var count = 0;
document.getElementsByTagName('button')[0].addEventListener('click', () => {
	if (count === 0) {
		ques5.textContent = 'Welcome to Elevation academy';
		count = 1;
	} else {
		ques5.textContent = 'Hello world';
		count = 0;
	}
});

//ques6
let ques6 = (ques2[6].style.color = 'red');
console.log(ques6);
ques2[6].setAttribute('id', 'heading');
console.log(ques2[6].getAttribute('id'));

//ques7
let ques7 = document.querySelector('.flex');
var count = 0;
document.getElementsByTagName('button')[1].addEventListener('click', () => {
	if (count === 0) {
		ques7.style.flexDirection = 'column';
		count = 1;
	} else {
		ques7.style.flexDirection = 'row';
		count = 0;
	}
});

//ques8
document.getElementsByTagName('th')[0].style.color = 'crimson';
document.getElementsByTagName('th')[1].style.color = 'crimson';

//ques9
let ques9 = document.getElementsByClassName('timerClock');
ques9[0].addEventListener('click', () => {
	function startTime() {
		let time = new Date();
		let hrs = time.getHours();
		let mins = time.getMinutes();
		let secs = time.getSeconds();
		ques9[0].innerHTML = `<h1>TIME - ${hrs} : ${mins} : ${secs}</h1>`;
	}
	setInterval(() => {
		startTime();
	}, 1000);
});

//time();

//ques10
// var count = 0;
// let ques10 = document.getElementsByTagName('a');
// ques10[0].addEventListener('click', () => {
// 	count = 1;
// 	document.body.innerHTML = '';
// 	//ques10[0].setAttribute('href', './guessgame.html');
// 	//ques10[0].setAttribute('target', '_blank');

// 	if (count === 1) {
// 		console.log(document.querySelector('body'));
// 		document.querySelector('body').style.backgroundColor = 'rgb(40, 20, 20)';
// 	}
// });
