function clickEvent() {
	var box = document.getElementById('box');
	box.style.backgroundColor = 'red';
}

function doubleClickEvent() {
	var box = document.getElementById('box');
	box.style.backgroundColor = 'green';
}

function onBlurEvent() {
	var input = document.getElementById('color-input');
	var value = input.value;

	var box = document.getElementById('box');
	box.style.backgroundColor = value;
}

function onkeyDownEvent(event) {
	var colors = [ 'red', 'orange', 'yellow', 'green', 'blue' ];
	var box = document.getElementById('box');
	box.style.backgroundColor = colors[event.key - 1];
}
