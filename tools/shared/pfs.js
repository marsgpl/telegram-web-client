const fs = require('fs');
const { promisify } = require('util');

const pfs = {
    stat: promisify(fs.stat),
    access: promisify(fs.access),
    makeDir: promisify(fs.mkdir),
    readDir: promisify(fs.readdir),
    readFile: promisify(fs.readFile),
    writeFile: promisify(fs.writeFile),
    copyFile: promisify(fs.copyFile),
};

pfs.fileExists = function(path) {
    return pfs.access(path, fs.F_OK)
        .then(()=>true)
        .catch(()=>false);
};

module.exports = pfs;
