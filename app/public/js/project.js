var project = function($){
	var $grid = $('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'masonry'
	});
	
	// Enable filtering
	$('.filter-button-group').on( 'click', 'a', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
		
		$('.selected-project-category').removeClass('selected-project-category');
		$(this).addClass('selected-project-category');
	});

}(jQuery);

