$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

      $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


// smooth scroll tutorial https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery

  $(".nav-logo").click(function(){
      $(".li-home").toggleClass("move-nav");
			$(".li-web").toggleClass("move-nav");
			$(".li-graphic").toggleClass("move-nav");
			$(".li-painting").toggleClass("move-nav");
			$(".li-about").toggleClass("move-nav");

  });

});
