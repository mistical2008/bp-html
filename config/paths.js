const path = require("path");

exports.root = path.resolve(__dirname, "../");

exports.dist = path.resolve(exports.root, "dist");
exports.src = path.resolve(exports.root, "src");

exports.assets = {
  assetsDir: path.resolve(exports.src, "assets"),
};

exports.views = {
  viewsDir: path.resolve(exports.src, "views"),
  layoutDir: path.resolve(exports.src, "views", "layout"),
};
