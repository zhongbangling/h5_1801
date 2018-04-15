var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
    // 查找sass文件
    gulp.src('./src/sass/*.scss')

    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))                        
    .pipe(gulp.dest('./src/css/'))
});


gulp.task('jtSass',function(){

    gulp.watch('./src/sass/*.scss',['compileSass'])
});


var browserSync = require('browser-sync');

gulp.task('server',function(){
    browserSync({

        port:18018,

        proxy:'http://localhost:18016',

        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });

    gulp.watch('./src/sass/*.scss',['compileSass']);
});