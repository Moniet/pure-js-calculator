var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('js-min', function (done) {
  return gulp.src(['./assets/scripts/*.js', './assets/scripts/!*min.js' ])
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest('./assets/scripts'))
    .pipe(browserSync.stream());
  done();
});

gulp.task('css-min', function(done) {
  return gulp.src('./assets/css/style.css')
  .pipe(cleanCSS({compatibility: '*'}))
  .pipe(rename(function (mycss) {
     mycss.basename += '.min';
  }))
  .pipe(gulp.dest('./assets/css'))
  .pipe(browserSync.stream());
  done();
});

gulp.task('watch', gulp.series('js-min', 'css-min', function(done) {
  browserSync.init({
    server: './'
  });
  gulp.watch('./assets/scripts/*.js', gulp.parallel('js-min'))
  .on('change', function(path, stats) {
      console.log('js file changed' + ' ' + path);
  })
  .on('unlink', function(path, stats) {
      console.log('js file deleted', path);
      // code to execute on delete
  });
  gulp.watch('./assets/css/style.css', gulp.parallel('css-min'))
  .on('change', function(path, stats) {
      console.log('css file changed' + ' ' + path);
  })
  .on('unlink', function(path, stats) {
      console.log('css file deleted', path);
      // code to execute on delete
  });

  gulp.watch('./index.html').on('change', browserSync.reload);

  done();

}));

gulp.task('default', gulp.series('watch'));
