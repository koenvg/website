var keystone = require('keystone');
var Types = keystone.Field.Types;
var iconList = 'icon-basic-accelerator, icon-basic-alarm, icon-basic-anchor, icon-basic-anticlockwise, icon-basic-archive, icon-basic-archive-full, icon-basic-ban, icon-basic-battery-charge, icon-basic-battery-empty, icon-basic-battery-full, icon-basic-battery-half, icon-basic-bolt, icon-basic-book, icon-basic-book-pen, icon-basic-book-pencil, icon-basic-bookmark, icon-basic-calculator, icon-basic-calendar, icon-basic-cards-diamonds, icon-basic-cards-hearts, icon-basic-case, icon-basic-chronometer, icon-basic-clessidre, icon-basic-clock, icon-basic-clockwise, icon-basic-cloud, icon-basic-clubs, icon-basic-compass, icon-basic-cup, icon-basic-diamonds, icon-basic-display, icon-basic-download, icon-basic-exclamation, icon-basic-eye, icon-basic-eye-closed, icon-basic-female, icon-basic-flag1, icon-basic-flag2, icon-basic-floppydisk, icon-basic-folder, icon-basic-folder-multiple, icon-basic-gear, icon-basic-geolocalize-01, icon-basic-geolocalize-05, icon-basic-globe, icon-basic-gunsight, icon-basic-hammer, icon-basic-headset, icon-basic-heart, icon-basic-heart-broken, icon-basic-helm, icon-basic-home, icon-basic-info, icon-basic-ipod, icon-basic-joypad, icon-basic-key, icon-basic-keyboard, icon-basic-laptop, icon-basic-life-buoy, icon-basic-lightbulb, icon-basic-link, icon-basic-lock, icon-basic-lock-open, icon-basic-magic-mouse, icon-basic-magnifier, icon-basic-magnifier-minus, icon-basic-magnifier-plus, icon-basic-mail, icon-basic-mail-multiple, icon-basic-mail-open, icon-basic-mail-open-text, icon-basic-male, icon-basic-map, icon-basic-message, icon-basic-message-multiple, icon-basic-message-txt, icon-basic-mixer2, icon-basic-mouse, icon-basic-notebook, icon-basic-notebook-pen, icon-basic-notebook-pencil, icon-basic-paperplane, icon-basic-pencil-ruler, icon-basic-pencil-ruler-pen, icon-basic-photo, icon-basic-picture, icon-basic-picture-multiple, icon-basic-pin1, icon-basic-pin2, icon-basic-postcard, icon-basic-postcard-multiple, icon-basic-printer, icon-basic-question, icon-basic-rss, icon-basic-server, icon-basic-server2, icon-basic-server-cloud, icon-basic-server-download, icon-basic-server-upload, icon-basic-settings, icon-basic-share, icon-basic-sheet, icon-basic-sheet-multiple, icon-basic-sheet-pen, icon-basic-sheet-pencil, icon-basic-sheet-txt, icon-basic-signs, icon-basic-smartphone, icon-basic-spades, icon-basic-spread, icon-basic-spread-bookmark, icon-basic-spread-text, icon-basic-spread-text-bookmark, icon-basic-star, icon-basic-tablet, icon-basic-target, icon-basic-todo, icon-basic-todo-pen, icon-basic-todo-pencil, icon-basic-todo-txt, icon-basic-todolist-pen, icon-basic-todolist-pencil, icon-basic-trashcan, icon-basic-trashcan-full, icon-basic-trashcan-refresh, icon-basic-trashcan-remove, icon-basic-upload, icon-basic-usb, icon-basic-video, icon-basic-watch, icon-basic-webpage, icon-basic-webpage-img-txt, icon-basic-webpage-multiple, icon-basic-webpage-txt, icon-basic-world';

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
	icon: { type: Types.Select, options: iconList, index: true },
	content: { type: Types.Html, wysiwyg: true, height: 400 }
});



Service.register();


	



