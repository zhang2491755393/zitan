var gulp = require("gulp");
var sass = require("gulp-sass");
var mincss = require("gulp-minify-css");
var minimg = require("gulp-imagemin");
var minjs = require("gulp-uglify");
var babel = require("gulp-babel");
var connect = require("gulp-connect");

gulp.task("test", async () => {
    await console.log('Hello World!');
})
gulp.task("sass", async () => {
    gulp.src("css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css/"));

})
gulp.task("css", async () => {
    gulp.src("css/*.css")
        .pipe(mincss())
        .pipe(gulp.dest("dist/css"));
})

gulp.task("html", async () => {
    gulp.src("*.html").pipe(gulp.dest("dist"));
    // console.log("666");
})
gulp.task("img", async () => {
    gulp.src("images/*.{jpg,png,gif}")
        .pipe(minimg())
        .pipe(gulp.dest("dist/images"));
})
gulp.task("js", async () => {
    gulp.src("js/*.js")
        .pipe(babel())
        .pipe(minjs())
        .pipe(gulp.dest("dist/js"));
})

gulp.task("watch", async () => {
    gulp.watch("css/*.scss", gulp.series("sass"));
});
gulp.task("build", gulp.series("sass", "css", "js", "img", "html"));

gulp.task("server", async () => {
    connect.server({
        root: "dist"
    })
})