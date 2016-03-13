var project = function($){

	var $grid = $('.grid').imagesLoaded( function() {
		// init Isotope after all images have loaded
		$grid.isotope({
			// options
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-sizer',
				gutter: '.gutter-sizer'
			}
		});
	});

	
	// Enable filtering
	$('.filter-button-group').on( 'click', 'a', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
	});

}(jQuery);

