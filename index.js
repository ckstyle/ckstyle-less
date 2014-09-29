var less = require('less')

function lesser(code, options) {
    var parser = new(less.Parser)(options);
    parser.parse(code, function (err, tree) {
        var css = tree.toCSS({
            silent: options.silent,
            verbose: options.verbose,
            ieCompat: options.ieCompat,
            compress: options.compress,
            cleancss: options.cleancss,
            cleancssOptions: {},
            sourceMap: Boolean(options.sourceMap),
            sourceMapFilename: options.sourceMap,
            sourceMapURL: options.sourceMapURL,
            sourceMapOutputFilename: options.sourceMapOutputFilename,
            sourceMapBasepath: options.sourceMapBasepath,
            sourceMapRootpath: options.sourceMapRootpath || "",
            outputSourceFiles: options.outputSourceFiles,
            writeSourceMap: function() {},
            maxLineLen: options.maxLineLen,
            strictMath: options.strictMath,
            strictUnits: options.strictUnits,
            urlArgs: options.urlArgs
        });

        code = css;
    });

    return code;
}

module.exports = lesser