'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _vinylFs = require('vinyl-fs');

var _vinylFs2 = _interopRequireDefault(_vinylFs);

var _gulpRename = require('gulp-rename');

var _gulpRename2 = _interopRequireDefault(_gulpRename);

var _gulpIconfont = require('gulp-iconfont');

var _gulpIconfont2 = _interopRequireDefault(_gulpIconfont);

var _gulpSvgIgnore = require('gulp-svg-ignore');

var _gulpSvgIgnore2 = _interopRequireDefault(_gulpSvgIgnore);

var _gulpConsolidate = require('gulp-consolidate');

var _gulpConsolidate2 = _interopRequireDefault(_gulpConsolidate);

function generateFileFromTpl(glyphs, options) {
  return _vinylFs2['default'].src(options.templates).pipe((0, _gulpConsolidate2['default'])(options.templateEngine, _extends({}, options, {
    glyphs: glyphs
  }))).pipe((0, _gulpRename2['default'])(function (pathObj) {
    pathObj.extname = '';
  })).pipe(_vinylFs2['default'].dest(options.templateOutDir || options.outDir));
}

function iconFont(src) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  return _vinylFs2['default'].src(src).pipe((0, _gulpSvgIgnore2['default'])(options.svgIgnores)).pipe((0, _gulpIconfont2['default'])(options)).on('glyphs', function (glyphs) {
    if (options.templates.length) {
      generateFileFromTpl(glyphs, options);
    }
  }).pipe(_vinylFs2['default'].dest(options.outDir));
}

exports['default'] = iconFont;
module.exports = exports['default'];