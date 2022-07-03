function submitRating(rating) {
	divSelector = document.getElementsByClassName('rating-component__form');
	divResponse = document.getElementsByClassName('rating-component__submitted');
	output = document.getElementsById('output');

	if (!rating) {
		alert('Submit a rating!');
	}	else {
		divSelector.classList.add('hidden');
		divResponse.classList.remove('hidden');
		output.value = rating;
	}
}
