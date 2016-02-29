var koenvg = function($){
	$( document ).ready(function(){
		$(".button-collapse").sideNav();
	});


	$(window).scroll(function(){
		if ($(this).scrollTop() > 1) {
			$('body').addClass('scrolled');
		} else {
			$('body').removeClass('scrolled');
		}
	});

}(jQuery);
