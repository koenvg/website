var keystone = require('keystone');

exports = module.exports = function(req, res, next) {
	req.params.list = 'Banner';
	req.params.item = '';
	var banner = keystone.list('Banner').model.find().limit(1);
	if(banner){
		req.params.item = banner.id;
	}
	
	next();
};
