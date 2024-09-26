const gulp = require('gulp');
const dartSass = require('gulp-dart-sass');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(dartSass({ outputStyle: 'compressed' }).on('error', dartSass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Tarefa de watch
function watch() {
    gulp.watch('./src/styles/*.scss', styles); // Observa alterações em arquivos .scss
}

// Exporta as funções
exports.default = styles;
exports.watch = watch; // Certifique-se de que esta linha está presente