var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var babel = require('gulp-babel');
var jade = require('gulp-jade')
var livereload = require('gulp-livereload');
var less = require('gulp-less');

var paths = {
  js: ['./src/**/*.js'],
  jade: ['./src/**/*.jade'],
  less: ['./src/**/*.less'],
  dist: './www/'
};

gulp.task('build:js', function () {
  return gulp.src(paths.js)
    .pipe(babel())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build:html', function() {
  return gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build:css', function() {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', ['build:js', 'build:html', 'build:css']);

gulp.task('lint:js', function() {
  return gulp.src(paths.js)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
    // .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
  return gulp.src(paths.js)
    .pipe(jscs('.jscsrc'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.js, ['lint:js', 'jscs', 'build:js']);
  gulp.watch(paths.jade, ['build:html']);
  gulp.watch(paths.less, ['build:css']);
});
