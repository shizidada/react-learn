const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  contextPath: resolve("src"),
  outputPath: resolve("dist"),

  buildPath: resolve("build"),
  manifestPath: resolve("build/manifest.json"),

  templatePath: resolve("public/index.html"),
};
