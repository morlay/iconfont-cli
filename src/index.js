import gulp from 'vinyl-fs';
import rename from 'gulp-rename';
import gulpIconfont from 'gulp-iconfont';
import gulpSvgIgnore from 'gulp-svg-ignore';
import consolidate from 'gulp-consolidate';

function generateFileFromTpl(glyphs, options) {
  return gulp.src(options.templates)
    .pipe(consolidate(options.templateEngine, {
      ...options,
      glyphs,
    }))
    .pipe(rename((pathObj) => {
      Object.assign(pathObj, {
        extname: '',
      });
    }))
    .pipe(gulp.dest(options.templateOutDir || options.outDir));
}

function iconFont(src, options = {}) {
  return gulp.src(src)
    .pipe(gulpSvgIgnore(options.svgIgnores))
    .pipe(gulpIconfont(options))
    .on('glyphs', (glyphs) => {
      if (options.templates.length) {
        generateFileFromTpl(glyphs, options);
      }
    })
    .pipe(gulp.dest(options.outDir));
}

export default iconFont;
