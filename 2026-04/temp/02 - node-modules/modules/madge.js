const madge = require('madge');

madge('./a-circle.js').then((res) => {
	console.log(res.circularGraph());
});
