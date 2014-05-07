var gulp   = require('gulp')
var jshint = require('gulp-jshint')
var uglify = require('gulp-uglify')
var notify = require("gulp-notify")
var es6ModuleTranspiler = require("gulp-es6-module-transpiler")

gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('uglify', function () {
    return gulp.src('./register*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./out'))
})

gulp.task('es6modules', function () {
    return gulp.src('./traceur-files/traceur.js')
        .pipe(es6ModuleTranspiler({ type: 'amd' }))
        .pipe(gulp.dest('./out'))
        .pipe(notify("ES6 Modules are ready!"));
})

gulp.task('watch', function() {

    // // Watch .scss files
    // gulp.watch('src/styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('./traceur-files/traceur.js', ['es6modules']);

    // // Watch image files
    // gulp.watch('src/images/**/*', ['images']);

});
