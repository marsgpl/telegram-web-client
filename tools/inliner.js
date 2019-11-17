const fs = require('fs');

const readFile = path => fs.readFileSync(path).toString('utf-8').trim();

const disclaimer = `
/**
 * This code is designed to be compiled with google closure compiler
 * using --compilation_level ADVANCED
 *
 * It's not a production code: no polyfills and no transpilation to es5
 *
 * CSS classes are obfuscated
 */
`;

const appShellCss = readFile('.cache/uglifycss/app-shell.css');
const appShellJs = readFile('.cache/google-closure-compiler/app-shell.js')
    .replace(/^\/\/.*?\n/, '');

const indexHtml = readFile('.cache/html-minifier/index.html')
    .replace('<link rel=stylesheet href=app-shell.css>', `<style>${appShellCss}</style>`)
    .replace('<script src=app-shell.js></script>', `<script>${disclaimer}${appShellJs}</script>`);

fs.writeFileSync('release/index.html', indexHtml);
