"use strict";
exports.__esModule = true;
exports.SECRET = exports.MONGODB_URI = exports.PORT = void 0;
var dotenv_1 = require("dotenv");
var path_1 = require("path");
var path = (0, path_1.resolve)(__dirname, "../../.dev.env");
dotenv_1["default"].config({ path: path });
exports.PORT = process.env.PORT || 30498;
exports.MONGODB_URI = process.env.MONGODB_URI;
exports.SECRET = process.env.SECRET;