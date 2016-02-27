var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Banner = new keystone.List('Banner', {
	nocreate: true,
	nodelete: true
});

Banner.add({
	name: { type: String, required: true },
	banner: { type: Types.CloudinaryImage, autoCleanup : true},
	content: { type: Types.Html, wysiwyg: true, height: 400 }
});

Banner.register();
