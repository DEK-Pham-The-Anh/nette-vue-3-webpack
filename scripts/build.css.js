
const postcss = require('postcss')
const postcssImport = require("postcss-import")
const autoprefixer = require('autoprefixer')
const postCssVariables = require('postcss-css-variables');
const cssnano = require('cssnano');
const fs = require('fs')

const indexCssDevel = __dirname + '/../www/css-devel/index.css'
const indexCssProd = __dirname + '/../www/css-production/index.css'

const checkoutCssDevel = __dirname + '/../www/css-devel/checkout.css'
const checkoutCssProd = __dirname + '/../www/css-production/checkout.css'

const dirCssProd = __dirname + '/../www/css-production'

if (!fs.existsSync(dirCssProd)){
    fs.mkdirSync(dirCssProd)
}

fs.readFile(indexCssDevel, (err, css) => {
    postcss([
        postcssImport(), //nahrazovani @import obsahem souboru
        autoprefixer({browsers: ['last 2 version',  'ie 11'], grid: 'autoplace'}), //nastaveni zpetne kompatibility pro prohlizece 2 verze zpet
        postCssVariables(), //CSS variables
        cssnano({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }]
        }),//CSS kompilace
    ])
    .process(css, { from: indexCssDevel, to: indexCssProd })
    .then(result => {
        fs.writeFile(indexCssProd, result.css, () => true)
        if ( result.map ) {
            fs.writeFile(indexCssProd + '.map', result.map.toString(), () => true)
        }
    })
})

fs.readFile(checkoutCssDevel, (err, css) => {
    postcss([
        postcssImport(), //nahrazovani @import obsahem souboru
        autoprefixer({browsers: ['last 2 version',  'ie 11'], grid: 'autoplace'}), //nastaveni zpetne kompatibility pro prohlizece 2 verze zpet
        postCssVariables(), //CSS variables
        cssnano({
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }]
        }),//CSS kompilace
    ])
    .process(css, { from: checkoutCssDevel, to: checkoutCssProd })
    .then(result => {
        fs.writeFile(checkoutCssProd, result.css, () => true)
        if ( result.map ) {
            fs.writeFile(checkoutCssProd + '.map', result.map.toString(), () => true)
        }
    })
})