export const fileExtensions = {
    js         : /\.(j|t)s(x)?$/,
    jsOrCss    : /\.(js|css)/,
    tests      : /\.(spec|test)\.js$/,
    css        : /\.css$/,
    cssModule  : /\.modules?\.css$/,
    sass       : /\.s(c|a)ss$/,
    sassModule : /\.modules?\.(s(a|c)ss)$/,
    fonts      : /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    images     : /\.(gif|png|jpe?g)/i,
    svgs       : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    staticFiles: /(\.js(\?.*)?)|(\.css)|(\.html)$/i
};
