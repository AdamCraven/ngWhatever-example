var gulp = require("gulp");
var to5 = require("gulp-6to5");

gulp.task("default", function () {
  gulp.run('6to5');
  gulp.run('html');
});

gulp.task('6to5', function () {
    return gulp.src('src/**/*.js')
        .pipe(to5({
            modules: 'common',
            experimental: true
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.watch('src/**/*', function  () {
    gulp.run('6to5')
});