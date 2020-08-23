// fs stands for file system
var fs = require('fs');

// fs.writeFile(
// 	'MyFile.txt',
// 	'Edureka welcome you to MERN Stack Development Internship.',
// 	(err) => {
// 		if (err) throw err;
// 		console.log('File Created');
// 	}
// );

// fs.appendFile(
// 	'MyFile.txt',
// 	`\n${Math.floor(Math.random() * (100 - 1) + 1)} This is NodeJS Class`,
// 	(err) => {
// 		if (err) throw err;
// 		console.log('Text added to file');
// 	}
// );

// fs.readFile('MyFile.txt', 'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// fs.readFile('db.json', 'utf-8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

// fs.rename('MyFile.txt', 'MyText.txt', (err) => {
// 	if (err) throw err;
// 	console.log('File Renamed');
// });

fs.unlink('MyText.txt', (err) => {
	if (err) throw err;
	console.log('File Deleted');
});
