
$(document).ready(function() {
	$(".float").css("display", "none");
	$(".float").fadeIn(1200);
	$("a.transition").click(function(event) {
			event.preventDefault();
			linkLocation = this.href;
	$(".float").fadeOut(1000, redirectPage);
			});
		function redirectPage() {
		window.location = linkLocation;
	}
});
		
$(document).ready(function() {
			$(".title").css("display", "none");
			$(".title").fadeIn(2600);
			$("a.transition").click(function(event) {
				event.preventDefault();
				linkLocation = this.href;
				$(".none").fadeOut(2600, redirectPage);
			});
			function redirectPage() {
				window.location = linkLocation;
			}
		});

/*SLIDER*/
var main = function() {
    $('.slider').click(function() {
  		var currentSlide = $('.active-slide');
  		var nextSlide = currentSlide.next();

		if(nextSlide.length == 0) {
    	nextSlide = $('.slide').first();
	}

	currentSlide.fadeOut(600).removeClass('active-slide');
	nextSlide.fadeIn(600).addClass('active-slide');
	});
};

$(document).ready(main);
/*END_SLIDER*/