var path = require('path');
var ENV = process.env.NODE_ENV

console.log("App running in "+ENV+" environment")

// La seule configuration a modifié.

module.exports = {
    entry: {
        app: [
        './app/shared/css/sharedStyle.scss',
        './app/shared/js/app.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../app/dist'), // attention ce dossier sera vidé systématiquement (ne rien y mettre !)
        filename: 'js/[name].js',
        publicPath: './dist/' // base url for assets (img, font...) !!! changing that will affect server
    },
    port: 3002,
    // proxy: 'http://localhost:8000', // Pour PHP / Ruby ou autre
    base: './',
    support: ['last 2 versions'], // Pour autoprefixer
    forceReload: ['./app/*.html', './app/components/**/*.html']
}