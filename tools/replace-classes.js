const Traverse = require('./shared/Traverse');
const FsCache = require('./shared/FsCache');
const FsFetch = require('./shared/FsFetch');

const srcDir = 'src';
const dstDir = '.cache/replace-classes';

const nextClassName = function() {
    if (nextClassName.index === 36) {
        nextClassName.index = 360;
    }

    if (nextClassName.index === 1296) {
        throw 'nextClassName not implemented after 1296';
    }

    return (nextClassName.index++).toString(36);
};

nextClassName.index = 10;

(async function() {
    const cache = new FsCache;

    await FsFetch.precacheDir(srcDir, cache);

    const CLASS_NAME_JS_REGEXP = /CSS_CLASS__([a-z0-9_]+) = '\.([a-z0-9_-]+)'/gi;
    const CLASS_NAME_HTML_REGEXP = /class="([a-z0-9_-]+)"/gi;
    const CLASS_NAME_CSS_REGEXP = /\.([a-z0-9_-]+)/gi;

    const classNames = {};

    Object.keys(cache.files).forEach(filePath => {
        const fileExt = filePath.split('.').pop();

        if (fileExt !== 'js') return;

        const fileContent = cache.files[filePath];
        const m = fileContent.matchAll(CLASS_NAME_JS_REGEXP);

        for (const match of m) {
            const className = match[2];
            classNames[className] = classNames[className] || nextClassName();
        }
    });

    await Traverse.dir(srcDir, dstDir, {
        fsCache: cache,
        replaceContent: function(fileContent, filePath) {
            const fileExt = filePath.split('.').pop();

            if (fileExt === 'js') {
                fileContent = fileContent.replace(CLASS_NAME_JS_REGEXP,
                    function(_, varPart, className) {
                        return `CSS_CLASS__${varPart} = '\.${classNames[className] || className}'`;
                    });
            } else if (fileExt === 'css') {
                fileContent = fileContent.replace(CLASS_NAME_CSS_REGEXP,
                    function(_, className) {
                        return `.${classNames[className] || className}`;
                    });
            } else if (fileExt === 'html') {
                fileContent = fileContent.replace(CLASS_NAME_HTML_REGEXP,
                    function(_, className) {
                        return `class="${classNames[className] || className}"`;
                    });
            }

            return fileContent;
        }
    });
})().catch(error => {
    console.error(error);
    process.exit(1);
});
