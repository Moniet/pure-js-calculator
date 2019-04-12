var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

function minCSS(cb) {
  return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css/min-css'));
  cb();
}

var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

function minJS(cb) {
  return pipeline(
        gulp.src('.assets/scripts/*.js'),
        uglify(),
        gulp.dest('.assets/scripts/min-js')
  );
  cb();
}

function watcher(cb) {
  gulp.watch('./assets/css/style.css', minCSS);
  gulp.watch('./assets/js/main.js', minJS);
}

gulp.task('min-css', minCSS);
gulp.task('min-js', minJS);
gulp.task('watcher', watcher);

gulp.task('default', gulp.series('min-css', 'min-js', 'watcher'));
