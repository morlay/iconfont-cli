#!/bin/bash

iconfont ./example/svgs/*.svg \
  -o ./example/dist \
  -t ./example/templates/icons.css.ejs ./example/templates/index.html.ejs \
  --template-out-dir ./example/dist
