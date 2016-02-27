var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Service = new keystone.List('Service', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true },
	sortable: true
});

Service.add({
	title: { type: String, required: true },
	icon: { type: Types.Select, options: 'basic-accelerator, basic-alarm, basic-anchor', default: 'basic-alarm', index: true },
	content: { type: Types.Html, wysiwyg: true, height: 400 }
});



Service.register();


