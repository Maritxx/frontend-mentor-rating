function submitRating(rating) {
	divVoting = document.getElementById('voting-component');
	divSubmitted = document.getElementById('submitted-response');
	output = document.getElementById('output');

	if (!rating) {
		alert('Submit a rating!');
	}	else {
		divVoting.classList.add('hidden');
		divSubmitted.classList.remove('hidden');
		output.value = rating;
	}
}
