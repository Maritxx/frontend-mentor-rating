function submitRating(rating) {
	divSelector = document.getElementByClassName('rating-component__form');
	divResponse = document.getElementByClassName('rating-component__submitted');
	ratingOutput = document.getElementById('ratingOutput');

	if (!rating) {
		alert('Submit a rating!');
	}	else {
		divSelector.classList.add('hidden');
		divResponse.classList.remove('hidden');
		ratingOutput.value = rating;
	}
}
