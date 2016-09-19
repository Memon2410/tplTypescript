var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	watchify = require("watchify"),
	tsify = require("tsify"),
	uglify = require("gulp-uglify"),
	sourcemaps = require("gulp-sourcemaps"),
	buffer = require("vinyl-buffer"),
	gutil = require("gulp-util"),
	connect = require('gulp-connect'),
	ts = require("gulp-typescript"),
	jade = require("gulp-jade"),
	sass = require("gulp-sass"),
	tsProject = ts.createProject("tsconfig.json"),

	jadeTasks = ['jade'],
	sassTasks = ['sass'],
	typeTasks = ['typescript'];


/* Paths
-------------------------------------------------------------------------------*/
var path = {
	type: ['ts/**/*.ts'],
	js: 'public/assets/js',

	jade: ['jade/**/*.jade'],
	html: 'public',

	sass: ['sass/**/*.{scss,sass}'],
	css: 'public/assets/css'

}

/* Browserify
-------------------------------------------------------------------------------*/
var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: ['ts/functions.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify));


/* Configuración de compilacion 'JADE'
-------------------------------------------------------------------------------*/
gulp.task('jade', function() {
  return gulp.src(path.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(path.html))
});

/* Configuración de compilacion 'TYPESCRIPT'
-------------------------------------------------------------------------------*/
gulp.task("typescript", function () {
    return browserify({
    	basedir: '.',
    	debug: true,
    	entries:['ts/functions.ts'],
    	cache: {},
    	packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('functions.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify().on('error', gutil.log))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.js));
});

/* Configuración de compilacion 'SASS'
-------------------------------------------------------------------------------*/
gulp.task('sass', function () {
 return gulp.src(path.sass)
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest(path.css));
});


watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);

function bundle() {
	return watchedBrowserify
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest("public"));
}

/* Configuración de compilacion 'WATCH'
-------------------------------------------------------------------------------*/
gulp.task('watch', function () {
  gulp.watch(path.jade, jadeTasks);
  gulp.watch(path.sass, sassTasks);
  gulp.watch(path.type, typeTasks);
})

/* Start Webserver
-------------------------------------------------------------------------------*/
gulp.task('webserver', function() {
  connect.server();
});
gulp.task('default', ['webserver']);
