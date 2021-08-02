const { readFileSync } = require('fs')

const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

const css = readFileSync('./www/css-devel/index.css', 'utf8')

const ctx = { parser: false, map: 'inline' }

postcssrc(ctx).then(({ plugins, options }) => {
  postcss(plugins)
    .process(css, options)
    .then((result) => console.log('test'))
})