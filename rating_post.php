<!DOCTYPE html>
<html lang="en">
	
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">

		<link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap" rel="stylesheet">

		<link rel="stylesheet" type="text/css" href="reset.css">
		<link rel="stylesheet" type="text/css" href="style.css">

		<title>Interactive rating component</title>
	</head>

	<body>
		<main id="my-page">
			<section class="rating-component container">
				<div class="rating-component__holder">
					<div class="rating-component__thank-you">
						<img src="img/illustration-thank-you.svg" alt="" aria-hidden="true">
						<div class="selected-rating__holder">
							<span>You selected <?php echo $_POST["rating"]; ?> out of 5. </span>
						</div>
						<h1>Thank you!</h1>
						<p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>	
					</div>
				</div>
			</section>
		</main>

		<footer>
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
	    		Coded by <a href="#">Marit</a>.
			</div>
			<script src="main.js"></script>
		</footer>
	</body>
</html>