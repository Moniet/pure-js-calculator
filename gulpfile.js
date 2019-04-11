var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', (cb) => {
  return gulp.src('./assets/css/style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css/min-css'));
  cb();
});

var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;

gulp.task('minify-js', () => {
  return pipeline(
        gulp.src('.assets/scripts/*.js'),
        uglify(),
        gulp.dest('.assets/scripts/min-js')
  );
});

gulp.task('default', gulp.series('minify-css', 'minify-js'));
