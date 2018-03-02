var gulp = require('gulp'),
postcss = require('gulp-postcss'),
imp = require('postcss-import'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
mixins = require("postcss-mixins");


gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([imp,mixins,cssvars,nested,autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
	});