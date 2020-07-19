var fs = require('fs');

var dirname = process.argv[2];
var pat = RegExp('\\.' + process.argv[3] + '$');

file = fs.readdir(dirname, function(err, files) {
  for (i = 0; i < files.length; i++) {
    if (pat.test(files[i])) {
      console.log(files[i]);
    }
  }
});