var gulp = require('gulp');
var htmlminify = require("gulp-html-minify");
const imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
// var htmlBuilder = require('gulp-html-builder');
// var minify = require('gulp-minify');
var config = {
    resourcePath: "./src/main/webapp/static/",
    destPath: "./target/static/"
};
// Copy all static assets
gulp.task('copy', function () {
    gulp.src(config.resourcePath + "**/*.!(html|css|js)")
        .pipe(gulp.dest(config.destPath));
});

gulp.task('css', ["copy"], function () {
    return gulp.src(config.resourcePath + '**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest(config.destPath));
});
gulp.task('js', ["copy"], function () {
    return gulp.src(config.resourcePath + '**/*+(.js)')
        .pipe(uglify())
        .pipe(gulp.dest(config.destPath))
});
gulp.task('html', ["copy"], function () {
    return gulp.src(config.resourcePath + '**/*+(.html)')
        .pipe(htmlminify())
        .pipe(gulp.dest(config.destPath))
});
gulp.task('gzip', ['js', 'html', "css"], function () {
    return gulp.src(config.destPath + '**/*+(.js|.html|.css)')
        .pipe(gzip())
        .pipe(gulp.dest(config.destPath))
});
//  //图片压缩未实现
// gulp.task('image', function () {
//     gulp.src(config.resourcePath + '**/+(*.png|*.jpg|*.gif)')
//         .pipe()
//         .pipe(gulp.dest(config.destPath))
// });

gulp.task('default', ["gzip"]);

gulp.task('testHtml', function () {
    return gulp.src(config.resourcePath + 'main-page-view.html')
        .pipe(htmlminify())
        .pipe(gulp.dest("./tar"))
});