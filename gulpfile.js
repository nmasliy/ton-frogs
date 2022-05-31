const gulp = require('gulp')
const del = require('del')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const fileinclude = require('gulp-file-include')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const gulpIf = require('gulp-if')
const gcmq = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const smartGrid = require('smart-grid')
const uglify = require('gulp-uglify-es').default
const path = require('path')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')

const isMap = process.argv.includes('--map')
const isMinify = process.argv.includes('--clean')
const isSync = process.argv.includes('--sync')

function clean() {
	return del('./build/*')
}

function favicon() {
	return gulp.src('./src/favicon/**/*.*').pipe(gulp.dest('./build/favicon'))
}

function files() {
	return gulp.src('./src/video/**/*.*').pipe(gulp.dest('./build/video'))
}

function html() {
	return gulp
		.src('./src/*.html')
		.pipe(
			fileinclude({
				prefix: '@@',
				basepath: '@file',
			})
		)
		.pipe(gulp.dest('./build'))
		.pipe(gulpIf(isSync, browserSync.stream()))
}

function styles() {
	return gulp
		.src('./src/scss/style.scss')
		.pipe(gulpIf(isMap, sourcemaps.init()))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gcmq())
		.pipe(autoprefixer())
		.pipe(
			gulpIf(
				isMinify,
				cleanCSS()
			)
		)
		.pipe(gulpIf(isMap, sourcemaps.write()))
		.pipe(gulp.dest('./build/css'))
		.pipe(gulpIf(isSync, browserSync.stream()))
}

function stylesLibs() {
	return gulp
		.src('./src/scss/libs.scss')
		.pipe(
			sass({
				includePaths: ['node_modules'],
			})
		)
		.pipe(gcmq())
		.pipe(
			cleanCSS({
				level: 2,
			})
		)
		.pipe(gulp.dest('./build/css'))
		.pipe(gulpIf(isSync, browserSync.stream()))
}

function scripts() {
	return gulp
		.src('./src/js/main.js')
		.pipe(gulpIf(isMap, sourcemaps.init()))
		.pipe(
			uglify({
				mangle: {
					toplevel: isMinify,
				},
				output: {
					beautify: !isMinify,
					comments: !isMinify,
				},
			})
		)
		.pipe(gulpIf(isMap, sourcemaps.write()))
		.pipe(gulp.dest('./build/js'))
		.pipe(gulpIf(isSync, browserSync.stream()))
}

function scriptsLibs() {
	return gulp
		.src([
			'./node_modules/micromodal/dist/micromodal.min.js',
			'./node_modules/swiper/swiper-bundle.min.js',
		])
		.pipe(gulpIf(isMap, sourcemaps.init()))
		.pipe(concat('libs.js'))
		.pipe(
			uglify({
				mangle: {
					toplevel: true,
				},
				output: {
					beautify: false,
					comments: false,
				},
			})
		)
		.pipe(gulpIf(isMap, sourcemaps.write()))
		.pipe(gulp.dest('./build/js'))
		.pipe(gulpIf(isSync, browserSync.stream()))
}

function images() {
	// Clean images
	// del('./src/img/optimized/*')
	// Minify images
	gulp
		.src('./src/img/src/**/*')
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 75, progressive: true }),
				imagemin.optipng({ optimizationLevel: 5 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(gulp.dest('./src/img/optimized'))
	// Webp images
	gulp
		.src('./src/img/src/**/*.{png,jpg}')
		.pipe(webp())
		.pipe(gulp.dest('./src/img/optimized'))
	// Dest images
	return gulp.src('./src/img/optimized/**/*').pipe(gulp.dest('./build/img'))
}

function watch() {
	if (isSync) {
		browserSync.init({
			server: {
				baseDir: './build/',
			},
		})
	}

	gulp.watch('./src/scss/**/*.scss', styles)
	gulp.watch('./src/**/*.html', html)
	gulp.watch('./src/js/main.js', scripts)
}

const build = gulp.parallel(
	html,
	styles,
	scripts,
	images,
	files,
	favicon,
	scriptsLibs,
	stylesLibs
)
const buildWithClean = gulp.series(clean, build)
const dev = gulp.series(buildWithClean, watch)

exports.build = buildWithClean
exports.watch = dev
exports.images = images
exports.html = html;
exports.files = files
exports.styles = styles
exports.scriptsLibs = scriptsLibs;
exports.stylesLibs = stylesLibs;
exports.default = dev