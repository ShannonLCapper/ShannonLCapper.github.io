var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var browserSync = require("browser-sync").create();
var uglify = require("gulp-uglify");

// Combine and minify JS files
var jsDest = "dist/js",
    jsRoot = "app/"
    moduleJsFiles = jsRoot + "**/*.module.js",
    allJsFiles = jsRoot + "**/*.js",
    jsFiles = [
      moduleJsFiles,
      allJsFiles
    ];

gulp.task("scripts", function(){
  return gulp.src(jsFiles)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(jsDest))
    .pipe(rename("app.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Combine and compile Sass files
var cssDest = "dist/styles",
    sassFiles = "app/styles/**/*.+(sass|.scss)";

gulp.task("styles", function(){
  return gulp.src(sassFiles)
    .pipe(sass())
    .pipe(concat("app.css"))
    .pipe(autoprefixer({
      browsers: [">5% in US"],
      cascade: false
    }))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Run server that live-reloads
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Watch for changes in JS and Sass
gulp.task("watch", ["browserSync", "styles", "scripts"], function() {
  gulp.watch(sassFiles, ["styles"]);
  gulp.watch("**/*.html", browserSync.reload);
  gulp.watch(allJsFiles, ["scripts"]);
});

// Default task
gulp.task("default", ["watch"]);