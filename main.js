const {readFile} = require('fs');
const inputPath = process.argv[2] || 'input.txt';
const itemConverter = require('./item-converter.js');

readFile(inputPath, 'utf8', (err, data) => {
    const items = itemConverter(data);
    console.log(items);
});
