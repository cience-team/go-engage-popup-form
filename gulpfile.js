const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('source/**.css')
    .pipe(cleanCSS())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', () => {
  return gulp.src('source/**.js')
    .pipe(uglify())
    .pipe(concat('script.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('minify-css', 'minify-js'));
