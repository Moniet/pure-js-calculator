const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('clean-css');
const pump = require('pump');
const rename = require('gulp-rename');

var lokesh = {

  scripts: "assets/scripts/main.js",
  css: "assets/css/style.css"

};


gulp.task('js-min', function (cb) {

   return gulp.src(lokesh.scripts.toString())
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename(function (path) {
        path.basename += 'min';
        path.extname += '.js';
      }))
      .pipe(gulp.dest('scripts'))
      .on('error', function(err) {
        console.error('Error in script task', err.toString());
      });

});

gulp.task('css-min', function() {

  return gulp.src(lokesh.css.toString())
    .path(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename(function (path) {
      path.basename += 'min';
      path.extname += '.css';
    }))
   .pipe(gulp.dest(lokesh.css))
   .on('error', function(err) {
     console.error('error in css min task', err.toString());
   });

});

gulp.task('lookout', function() {

  gulp.watch(lokesh.css.toString(), ['css-min']);
  gulp.watch(lokesh.scripts.toString(), ['js-min']);

});

gulp.task('comp', ['js-min', 'css-min', 'lookout']);
