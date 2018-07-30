var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('browse-sync', function() {
  browserSync.init({
    proxy: "https://localhost:8888"
  });
});

gulp.task('js-min', function (done) {
  return gulp.src('8888/assets/scripts/main.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      path.basename += '.min';
     }))
    .pipe(gulp.dest('8888/assets/scripts'))
    .pipe();
  done();
});

gulp.task('css-min', function(done) {
  return gulp.src('8888/assets/css/style.css')
  .pipe(cleanCSS({compatibility: '*'}))
  .pipe(rename(function (mycss) {
     mycss.basename += '.min';
  }))
  .pipe(gulp.dest('8888/assets/css'));
  done();
});

gulp.task('watch', function(done) {

  gulp.watch('8888/assets/scripts/main.js', gulp.parallel('js-min'))
  .on('change', function(path, stats) {
      console.log('js file changed' + ' ' + path);
  })
  .on('unlink', function(path, stats) {
      console.log('js file deleted', path);
  });

  gulp.watch('8888/assets/css/style.css', gulp.parallel('css-min'))
  .on('change', function(path, stats) {
      console.log('css file changed' + ' ' + path);
  })
  .on('unlink', function(path, stats) {
      console.log('css file deleted', path);
      // code to execute on delete
  });

  done();

});

gulp.task('default', gulp.series('js-min', 'css-min', 'watch'));
