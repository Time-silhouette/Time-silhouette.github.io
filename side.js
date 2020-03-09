$(document).ready(function() {
	$('#open-side-nav, #close-side-nav').click(function(event) {
		event.preventDefault();
		$('#main, #side-nav').toggleClass('off-display');
	});
});