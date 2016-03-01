var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Offer Model
 * ==========
 */

var Offer = new keystone.List('Offer', {
	map: { name: 'title' },
	sortable: true
});


Offer.add({
	title: { type: String, required: true },
	background: { type: Types.CloudinaryImage, autoCleanup : true },
	content: { type: Types.Textarea, height: 200 }
});



Offer.register();


	



