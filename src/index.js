import gulp from 'vinyl-fs';
import rename from 'gulp-rename';
import gulpIconfont from 'gulp-iconfont';
import gulpSvgIgnore from 'gulp-svg-ignore';
import consolidate from 'gulp-consolidate';
import mapStream from 'map-stream';
import simplifySvg from 'simplify-svg';

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
    .pipe(mapStream((file, callback) => {
      simplifySvg(String(file.contents), {
        scale: {
          width: 1024,
        },
      })
        .then((result) => {
          Object.assign(file, {
            contents: new Buffer(result),
          });
          callback(null, file);
        });
    }))
    .pipe(gulpIconfont(options))
    .on('glyphs', (glyphs) => {
      if (!!options.templates) {
        generateFileFromTpl(glyphs, options);
      }
    })
    .pipe(gulp.dest(options.outDir));
}

export default iconFont;
