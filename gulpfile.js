/* команди npm для gulp
 npm install gulp-sass --save-dev
 npm install browser-sync --save-dev
 npm install --save-dev gulp-watch
 npm install gulp-useref --save-dev
 npm install gulp-uglify --save-dev -//
 npm install gulp-if --save-dev
 npm install gulp-minify-css --save-dev -//
 npm install gulp-clean-css --save-dev -//
 */

var gulp        = require('gulp'), //ініціалізація gulp
    sass        = require('gulp-sass'), //ініціалізація sass
    browserSync = require('browser-sync'), //ініціалізація browser-sync
    concat      = require('gulp-concat'),//конкатенація css та js
    uglify      = require('gulp-uglify'), //мініфікація js
    cssnano     = require('gulp-cssnano'), //мініфікація css
    rename      = require('gulp-rename'); //зміна імені файла

// Завдання для компіляції sass
gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss') //пошук файлів з розширенням scss
        .pipe(sass().on('error', sass.logError)) //вивід помилок
        .pipe(gulp.dest('app/css')) //вивід зкомпільованого файлу до теки css
        .pipe(browserSync.reload({ // перезавантажувати синхронізатор при кожній зміні
            stream: true
        }))
});

//конкатинація та мініфікація js
gulp.task('scripts', function () {
    return gulp.src([
        'app/js/scripts.js',
        'app/js/contact-form.js',
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//конкатинація та мініфікація css
gulp.task ('css-libs', function() {
    return gulp.src([
        'app/css/fonts.css',
        'app/css/style.css',
        'app/css/style-responsive.css',
    ])
        .pipe(concat('style.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});


//завдання для browser-sync
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app' //робоча папка для перезавантаження сторінки
        }
    })
});

//слідкування за змінами у проекті
gulp.task('watch', ['browserSync', 'sass', 'scripts', 'css-libs'], function () { //запуск browser-sync та sass відслідковувачів
    gulp.watch('app/scss/**/*.scss', ['sass']); //пошук scss файлів
    gulp.watch('app/*.html', browserSync.reload); //пошук html файлів
    gulp.watch('app/js/**/*.js', browserSync.reload); //пошук js файлів
});

