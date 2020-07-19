var lslib = require("./make-it-modular");

var dirname = process.argv[2];

lslib(dirname, process.argv[3], function (err, files) {
  for (i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
