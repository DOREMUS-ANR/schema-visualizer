(function() {
  'use strict';

  var path = require('path');
  var gulp = require('gulp');
  var conf = require('./conf');

  var browserSync = require('browser-sync');

  var $ = require('gulp-load-plugins')();

  var wiredep = require('wiredep').stream;
  var _ = require('lodash');

  gulp.task('styles-reload', ['styles'], function() {
    return buildStyles()
      .pipe(browserSync.stream());
  });

  gulp.task('styles', function() {
    return buildStyles();
  });

  var buildStyles = function() {
    return gulp.src([
        path.join(conf.paths.src, '/app/index.styl')
      ])
      .pipe(wiredep(_.extend({}, conf.wiredep)))
      .pipe($.sourcemaps.init())
      .pipe($.stylus()).on('error', conf.errorHandler('Stylus'))
      .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
  };
})();
