var gulp = require('gulp'),
   uglify = require('gulp-uglify');
 minifyCss = require('gulp-minify-css');
 
gulp.task('minify', function () {
   gulp.src('js/style.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});






gulp.task('minify-css', function() {
  return gulp.src('css/stylesheets/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
});