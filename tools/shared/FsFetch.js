const pfs = require('./pfs');

module.exports = class {
    static async dir(path, cache = null) {
        const fromCache = cache && cache.dir(path);
        const entries = typeof fromCache !== 'undefined' ?
            fromCache : await pfs.readDir(path);

        if (!fromCache && cache) {
            cache.dir(path, entries);
        }

        return entries;
    }

    static async stat(path, cache = null) {
        const fromCache = cache && cache.stat(path);
        const stat = typeof fromCache !== 'undefined' ?
            fromCache : await pfs.stat(path);

        if (!fromCache && cache) {
            cache.stat(path, stat);
        }

        return stat;
    }

    static async file(path, cache = null) {
        const fromCache = cache && cache.file(path);
        const content = typeof fromCache !== 'undefined' ?
            fromCache : (await pfs.readFile(path, 'utf8')).toString();

        if (!fromCache && cache) {
            cache.file(path, content);
        }

        return content;
    }

    static async precache(path, cache) {
        if (!cache) return false;

        const stat = await this.stat(path, cache);

        if (stat.isDirectory()) {
            return this.precacheDir(path, cache);
        } else if(stat.isFile()) {
            return this.file(path, cache);
        } else {
            throw `FsFetch.precache: неизвестный тип: '${path}'; умею только файлы и директории`;
        }
    }

    static async precacheDir(path, cache) {
        const entries = await this.dir(path, cache);
        const promises = entries.map(entry =>
            this.precache(`${path}/${entry}`, cache));

        return Promise.all(promises);
    }
};
