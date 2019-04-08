const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const resolve = path.resolve;
const dev = process.env.NODE_ENV === "local";
console.log("dev:" + process.env.NODE_ENV);


const styleLoader = {
    loader: "style-loader",
    options: {
        sourceMap: dev
    }
};

// css
const cssLoader = {
    loader: "css-loader",
    options: {
        sourceMap: dev,
        modules: false,
        importLoaders: 1
    }
};

const moduleCSSLoader = {
    loader: "css-loader",
    options: {
        sourceMap: dev,
        modules: true,
        camelCase: "only",
        importLoaders: 1,
        localIdentName: "[name]__[local]___[hash:base64:8]"
    }
};

const lessLoader = {
    loader: "less-loader"
};

// postcss
const postCSSLoader = {
    loader: "postcss-loader",
    options: {
        sourceMap: dev,
        config: {
            path: path.join(__dirname, "./postcss.config.js")
        }
    }
};

function getCSSLoaders(modules) {
    return dev ? [styleLoader, modules ? moduleCSSLoader : cssLoader, postCSSLoader] : [MiniCssExtractPlugin.loader, modules ? moduleCSSLoader : cssLoader, postCSSLoader]
}

function getLessLoaders(modules) {
    return dev ? [styleLoader, modules ? moduleCSSLoader : cssLoader, postCSSLoader, lessLoader] : [MiniCssExtractPlugin.loader, modules ? moduleCSSLoader : cssLoader, postCSSLoader, lessLoader]
}

exports.css = () => {
    return {
        test: /\.css$/,
        exclude: /\.m\.css$/,
        oneOf: [{
            resourceQuery: /m/,
            use: getCSSLoaders(true)
        },
        {
            use: getCSSLoaders(false)
        }
        ]
    };
};

exports.less = () => {
    return {
        test: /\.less$/,
        exclude: /\.m\.less$/,
        oneOf: [{
            resourceQuery: /m/,
            use: getLessLoaders(true)
        },
        {
            use: getLessLoaders(false)
        }]
    };
};

exports.cssModules = () => {
    return {
        test: /\.m\.css$/,
        use: getCSSLoaders(true)
    };
};

exports.lessModules = () => {
    return {
        test: /\.m\.less$/,
        use: getLessLoaders(true)
    };
};

// eslint
exports.eslint = () => {
    return {
        enforce: "pre",
        test: /\.(jsx?|vue)$/,
        loader: "eslint-loader",
        include: resolve("src"),
        options: {
            cache: false,
            failOnError: !dev, // 生产环境发现代码不合法，则中断编译
            useEslintrc: true,
            formatter: require("eslint-friendly-formatter")
        }
    };
};

// babel
exports.babel = () => {
    return {
        test: /\.(js|jsx)?$/,
        include: resolve("src"),
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                cacheDirectory: dev ? resolve(".cache/js") : false,
                babelrc: true
            }
        }
    };
};

// images
exports.images = () => {
    return {
        test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
        loader: "url-loader",
        options: {
            limit: 10000,
            name(file) {
                return file.substr(file.indexOf("src") + 4).replace(/\\/g, "/");
            }
        }
    };
};

// fonts
exports.fonts = () => {
    return {
        test: /\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)??$/,
        loader: "url-loader",
        options: {
            limit: 8124,
            name: "fonts/[name].[hash:8].[ext]"
        }
    };
};

// media
exports.medias = () => {
    return {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
            limit: 3000,
            name: "medias/[name].[ext]"
        }
    };
};