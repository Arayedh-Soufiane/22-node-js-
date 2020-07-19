var fs = require('fs');

var filename = process.argv[2];

Buf = fs.readFileSync(filename);

str = Buf.toString();

console.log(str.split('\n').length - 1);