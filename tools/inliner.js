const fs = require('fs');

const readFile = path => fs.readFileSync(path).toString('utf-8').trim();

const appShellCss = readFile('.cache/uglifycss/app-shell.css');
const appShellJs = readFile('.cache/google-closure-compiler/app-shell.js');

const indexHtml = readFile('.cache/html-minifier/index.html')
    .replace('<link rel=stylesheet href=app-shell.css>', `<style>${appShellCss}</style>`)
    .replace('<script src=app-shell.js></script>', `<script>${appShellJs}</script>`);

fs.writeFileSync('release/index.html', indexHtml);
