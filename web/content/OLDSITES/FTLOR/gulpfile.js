// including plugins
var gulp = require('gulp')
, minifyCss = require("gulp-minify-css");
 
// task
gulp.task('minify-css', function () {
    gulp.src('./css/styles.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('min'));
});


// including plugins
var gulp = require('gulp')
, uglify = require("gulp-uglify");
 
// task
gulp.task('minify-js', function () {
    gulp.src('./JS/*.js') // path to your files
    .pipe(uglify())
    .pipe(gulp.dest('min'));
});





/*to run min/uglify, navigate to local project, then install the node packages:

npm install --save-dev gulp-uglify

npm install --save-dev gulp-minify-css




then use:

gulp minify-css
gulp minify-js






for more examples see:
http://julienrenaux.fr/2014/05/25/introduction-to-gulp-js-with-practical-examples/

*/