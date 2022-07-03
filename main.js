function submitRating(rating) {
	divSelector = document.getElementsByClassName("rating-component__form");
	divResponse = document.getElementByClassName("rating-component__submitted");
	output = document.getElementById("ratingOutput");

	if (!rating) {
		alert("Submit a rating!");
	}	else {
		divSelector.classList.add('hidden');
		divResponse.classList.remove('hidden');
		output.value = rating;
	}
}
