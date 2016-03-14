var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.section = 'home';
	locals.data = {
		services: [],
		projectData: {
			categories: [],
			projects: []
		},
		posts: [],
		offers: [],
		banner: {}
	};

	// Load the banner
	view.on('init', function (next) {

		var q = keystone.list('Banner').model.find().limit(1);

		q.exec(function (err, result) {
			locals.data.banner = result;
			next(err);
		});
	});

	// Load other posts
	view.on('init', function (next) {

		var q = keystone.list('Service').model.find().sort('sortOrder');

		q.exec(function (err, results) {
			locals.data.services = results;
			next(err);
		});
	});

	// Load the offers
	view.on('init', function (next) {

		var q = keystone.list('Offer').model.find().sort('sortOrder');

		q.exec(function (err, results) {
			locals.data.offers = results;
			next(err);
		});
	});

	// Load all categories
	view.on('init', function (next) {

		keystone.list('ProjectCategory').model.find().sort('name').exec(function (err, results) {
			locals.data.projectData.categories = results;
			next(err);
		});
	});

	// Load the projects
	view.on('init', function (next) {

		var q = keystone.list('Project')
			.model
			.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.limit(10)
			.populate('categories');

		q.exec(function (err, results) {
			locals.data.projectData.projects = results;
			next(err);
		});
	});

	view.on('init', function (next) {

		var q = keystone.list('Post')
			.model
			.find()
			.where('state', 'published')
			.sort('-publishedDate')
			.limit(5)
			.populate('categories');

		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
