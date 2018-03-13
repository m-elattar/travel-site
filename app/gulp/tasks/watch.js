var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch',function(){

	browserSync.init({
		server:{	
			baseDir:'app'
		}
		});

	watch('./app/index.html',function(){
		browserSync.reload();
		});
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
		});
	});

	watch('./app/assets/scripts/**/*.js',function(){
		gulp.start('scriptReload');
	});

gulp.task('cssInject',['styles'],function(){
		return gulp.src('./app/temp/styles/style.css').
		pipe(browserSync.stream());
	});

gulp.task('scriptReload',['scripts'],function(){
	browserSync.reload();
});