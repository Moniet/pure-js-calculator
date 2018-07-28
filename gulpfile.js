const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = requrie('clean-css');
const pump = require('pump');
const rename = require('gulp-rename');

var lokesh = {

  scripts: "assets/scripts/main.js",
  css: "assets/css/style.css"

};


gulp.task('js-min', function (cb) {

   return gulp.src(lokesh.scripts.toString())
      .pipe(minify())
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
    .path(minify())
    .pipe(rename(function (path) {
      path.basename += 'min';
      path.extname += '.css';
    }))
   .pipe(gulp.dest(lokesh.css));

});

gulp.task('lookout', function() {

  gulp.watch(lokesh.css.toString(), ['css-min']);
  gulp.watch(lokesh.scripts.toString(), ['js-min']);

});

gulp.task('comp', ['js-min', 'css-min']);
