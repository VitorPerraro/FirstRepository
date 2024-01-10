const switchButton = document.getElementById('switch');
const body = document.body;

switchButton.addEventListener('click', function() {
	if (this.checked) {
		body.classList.add('white');
	} else {
		body.classList.remove('white');
	}
});