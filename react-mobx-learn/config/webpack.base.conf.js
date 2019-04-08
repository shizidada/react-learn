const path = require("path");
const loaders = require("./loaders");

// console.log(path.resolve("node_modules"));
// console.log(path.resolve(__dirname, "..", "node_modules"));

module.exports = {

    context: path.resolve(__dirname, "../src"),

    module: {
        rules: [
            loaders.babel(),
            loaders.css(),
            loaders.less(),
            loaders.cssModules(),
            loaders.lessModules(),
            // loaders.images(),
            // loaders.fonts(),
            // loaders.medias(),
            // loaders.eslint()
        ]
    },

    plugins: [],

    resolve: {
        modules: [
            path.resolve(__dirname, "..", "src"), // path.resolve();
            path.resolve(__dirname, "..", "node_modules"), // node_modules
        ],
        alias: {
            components: path.resolve(__dirname, "../src/components/")
        },
        extensions: [".js", ".jsx", ".css", ".less"],
    }

}