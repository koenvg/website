var keystone = require('keystone');

exports = module.exports = function(req, res, next) {
	
	var view = new keystone.View(req, res),
	 	locals = res.locals;
	
	locals.section = 'home';
	locals.filters = {
		post: req.params.post
	};
	locals.data = {
		posts: [],
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

		var q = keystone.list('Post').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

		q.exec(function(err, results) {
			locals.data.posts = results;
			next(err);
		});

	});
	
	
	// Render the view
	view.render('index');
	
};
