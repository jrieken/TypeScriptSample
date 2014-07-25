
var messages = [
	'Hello World',
	'Hallo mensen',
	'Tere maailm',
	'Moi maailma',
	'Salut tout le monde',
	'Hallo Welt',
	'Γεια σου κόσμε',
	'हैलो वर्ल्ड',
	'Salve, mondo',
	'Всем привет',
	'مرحبا بالعالم',
];

function sayHello() {
	var idx = Math.ceil(Math.random() * messages.length) - 1;
	console.log(messages[idx]);
}

sayHello();