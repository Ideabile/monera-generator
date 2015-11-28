module.exports = function(files, metalsmith, done) {
  for (var file in files) {
    files[file].path = file;
  }
  done();
};
