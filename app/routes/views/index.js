var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
	 	locals = res.locals;
	
	locals.section = 'home';
	locals.data = {
		services: [],
		banner: {}
	};

	// Load the current post
	view.on('init', function(next) {

		var q = keystone.list('Banner').model.find().limit(1);

		q.exec(function(err, result) {
			locals.data.banner = result;
			next(err);
		});

	});

	// Load other posts
	view.on('init', function(next) {

		var q = keystone.list('Service').model.find().sort('sortOrder');

		q.exec(function(err, results) {
			locals.data.services = results;
			next(err);
		});

	});
	
	// Render the view
	view.render('index');
};
