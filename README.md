## Iconfont CLI

CLI wrapper of [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont)

[![Build Status](https://img.shields.io/travis/morlay/iconfont-cli.svg?style=flat-square)](https://travis-ci.org/morlay/iconfont-cli)
[![NPM](https://img.shields.io/npm/v/iconfont-cli.svg?style=flat-square)](https://npmjs.org/package/iconfont-cli)
[![Dependencies](https://img.shields.io/david/morlay/iconfont-cli.svg?style=flat-square)](https://david-dm.org/morlay/iconfont-cli)
[![License](https://img.shields.io/npm/l/iconfont-cli.svg?style=flat-square)](https://npmjs.org/package/iconfont-cli)

### Usage

```
iconfont ./example/svgs/*.svg \
  -o ./example/dist \
  -t ./example/templates/icons.css.ejs ./example/templates/index.html.ejs \
  --template-out-dir ./example/dist
```
