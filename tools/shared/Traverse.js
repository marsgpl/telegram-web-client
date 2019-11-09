const pfs = require('./pfs');
const FsFetch = require('./FsFetch');

const makeDirRec = async function(dstDir) {
    const currentDstDirPathParts = [];

    for (let dstDirPathPart of dstDir.split('/')) {
        currentDstDirPathParts.push(dstDirPathPart);
        try { await pfs.makeDir(currentDstDirPathParts.join('/')); } catch {}
    }
}

module.exports = class {
    static async dir(srcDir, dstDir, conf = {}) {
        const dstDirNormalized = conf.replacePath ?
            conf.replacePath(dstDir) : dstDir;

        const doNotCreateDstDir = conf.doNotCreateDirs &&
            (conf.doNotCreateDirs[dstDir] || conf.doNotCreateDirs[dstDirNormalized]);

        if (!doNotCreateDstDir) {
            if (dstDirNormalized.indexOf('/') > -1) {
                await makeDirRec(dstDirNormalized);
            } else {
                await pfs.makeDir(dstDirNormalized);
            }
        }

        const entries = await FsFetch.dir(srcDir, conf.fsCache);
        const promises = [];

        entries.forEach(entry => {
            const src = `${srcDir}/${entry}`;
            const dst = `${dstDirNormalized}/${entry}`;

            promises.push(this.entry(src, dst, conf));
        });

        return Promise.all(promises);
    }

    static async entry(src, dst, conf = {}) {
        const stat = await FsFetch.stat(src, conf.fsCache);

        if (stat.isDirectory()) {
            return this.dir(src, dst, conf);
        } else if(stat.isFile()) {
            return this.file(src, dst, conf);
        } else {
            throw `Traverse: неизвестный тип: '${dst}'; умею только файлы и директории`;
        }
    }

    static async file(src, dst, conf = {}) {
        const dstPath = conf.replacePath ? conf.replacePath(dst) : dst;

        if (!conf.replaceContent) {
            await pfs.copyFile(src, dstPath);
        } else {
            const srcContent = await FsFetch.file(src, conf.fsCache);
            const dstContent = conf.replaceContent(srcContent, src);

            await pfs.writeFile(dstPath, dstContent);
        }

        if (conf.onFileCreate) {
            conf.onFileCreate(dstPath);
        }
    }
};
