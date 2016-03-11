var gulp = require('gulp'),
uglify = require('gulp-uglify');

var concat = require('gulp-concat');
 
gulp.task('concat', function() {
  return gulp.src(['./js/*.js', './js/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});



gulp.task('compress', function() {
	return gulp.src(['./dist/all.js'])
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('dist', ['concat', 'compress']);