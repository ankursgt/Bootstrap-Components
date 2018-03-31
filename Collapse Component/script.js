$(document).ready(() => {
	$(".header").click(function () {
	    $header = $(this);
	    $content = $header.next();
	    $content.slideToggle(function () {
	            $content.display;
	    });
	});
});

