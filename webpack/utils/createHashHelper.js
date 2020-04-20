function createHashHelper(isProd) {
    return function (template, hash) {
        return isProd
            ? template.replace(/\.[^.]+$/, `.[${ hash }]$&`)
            : template;
    };
}

module.exports = { createHashHelper };
