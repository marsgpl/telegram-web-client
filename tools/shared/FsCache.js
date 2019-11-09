module.exports = class {
    constructor() {
        this.dirs = {};
        this.stats = {};
        this.files = {};
    }

    dir(path, entries = null) {
        if (entries !== null) {
            this.dirs[path] = entries;
        }

        return this.dirs[path];
    }

    stat(path, stat = null) {
        if (stat !== null) {
            this.stats[path] = stat;
        }

        return this.stats[path];
    }

    file(path, content = null) {
        if (content !== null) {
            this.files[path] = content;
        }

        return this.files[path];
    }
};
