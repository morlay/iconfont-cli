import iconFont from './index';
import yargs from 'yargs';

const argv = yargs

  .usage('Usage: $0 <svgfiles> --outDir <output> [options]')

  .example('iconfont *.svg -o dist')

  .options({
    outDir: {
      description: 'output dir',
      alias: 'o',
      required: true,
    },
    templates: {
      description: 'template path for generating file from graphs',
      alias: 't',
      array: true,
    },
    templateEngine: {
      description: 'template engine which could be set from consolidate',
      default: 'lodash',
    },
    templateOutDir: {},
    formats: {
      default: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
      array: true,
    },
    svgIgnores: {
      description: 'ids on svg tag which will be removed',
      default: ['#gridlines'],
      array: true,
    },
    fontName: {
      description: 'The font family name you want',
      default: 'iconfont',
      alias: 'f',
    },
    normalize: {
      description: 'Normalize icons by scaling them to the height of the highest icon.',
      default: true,
    },
    fixedWidth: {
      description: 'Creates a monospace font of the width of the largest input icon.',
      default: true,
    },
    fontHeight: {
      description: 'The font weight you want.',
    },
    descent: {
      description: 'The font descent. It is usefull to fix the font baseline yourself.',
    },
    centerHorizontally: {
      description: 'Calculate the bounds of a glyph and center it horizontally.',
      default: true,
    },
  })
  .help('help').alias('help', 'h')
  .showHelpOnFail(false, 'whoops, something went wrong! run with --help')
  .argv;

iconFont(argv._, argv);

