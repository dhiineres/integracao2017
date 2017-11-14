var fuseJs = require("fuse.js");

var books = [{
	'ISBN': 'A',
	'title': "test",
	'body': "Alguma coisa aqui"
}, {
	'ISBN': 'A',
	'title': "teste",
	'body': "aaasccvvv"
}]

var options = {
	keys: ['title', 'author'],
	id: 'ISBN'
}
var fuse = new Fuse(books, options);

console.log(fuse.search('old'));
