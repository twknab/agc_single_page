// Require dependencies for Gulp and Gulp Sass:
var gulp = require('gulp');
var sass = require('gulp-sass');

// Default task to give user some indication of basic actions for this project:
gulp.task('default', function () {
  // Default task code
  console.log('Type `gulp styles` to convert SCSS to CSS. You may also type `gulp watch` to monitor any SCSS changes real-time.');
});

// Style paths for SASS and CSS respectively:
var sassFiles = 'client/sass/**/*.scss',
  cssDest = 'client/css/';

// Convert any SCSS to CSS piping SASS output to CSS folder:
gulp.task('styles', function () {
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Setup watcher to run styles task anytime file is modified and saved.
gulp.task('watch', function () {
  gulp.watch(sassFiles, ['styles']);
});