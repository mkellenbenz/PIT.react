var config = require('../config').clean;
var gulp   = require('gulp');
var del    = require('del');

gulp.task('clean', function() {

  del([config.dest]);

});
