var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//gulp.task('concat', function () {
//    return gulp.src([
//        './vendor/bower_components/jquery/dist/jquery.js',
//        './src/js/**/*.js'
//    ]).pipe(concat('script.js'))
//        .pipe(gulp.dest('./web/js'));
//});
//
//gulp.task('uglify', ['concat'], function () {
//    return gulp.src('./web/js/script.js')
//        .pipe(uglify())
//        .pipe(rename('script.min.js'))
//        .pipe(gulp.dest('./web/js'));
//});

gulp.task('uglify', [], function () {
    return gulp.src('./web/js/app/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('./web/js/app'));
});

gulp.task('default', ['uglify']);