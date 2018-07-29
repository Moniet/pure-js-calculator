var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('js-min', function () {
  return gulp.src('assets/scripts/main.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('assets/scripts'))
    .on('error', function(err) {
      console.error('Error in script task', err.toString());
  });
});

gulp.task('css-min', function() {
  return gulp.src('assets/css/style.css')
  .pipe(cleanCSS({compatibility: '*'}))
  .pipe(rename(function (mycss) {
     mycss.basename += '.min';
  }))
  .pipe(gulp.dest('assets/css'));
});
