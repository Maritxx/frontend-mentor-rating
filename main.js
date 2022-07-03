function submitRating(rating) {
	const divVoting = document.getElementById('voting-component');
	const divSubmitted = document.getElementById('submitted-response');
	const output = document.getElementById('output');

	if (!rating) {
		alert('Submit a rating!');
	}	else {
		divVoting.classList.add('hidden');
		divSubmitted.classList.remove('hidden');
		output.value = rating;
	}
}
