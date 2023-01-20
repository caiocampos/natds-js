Object.defineProperty(exports, "__esModule", { value: true });
exports.themes = void 0;
var natds_styles_1 = require("@naturacosmeticos/natds-styles");
var parseTheme_1 = require("./parseTheme");
var createThemesObject_1 = require("./createThemesObject");
exports.themes = Object.keys(natds_styles_1.themes).reduce(function (value, key) {
    var result = value;
    result[key].dark = (0, parseTheme_1.parseTheme)(natds_styles_1.themes[key].dark);
    result[key].light = (0, parseTheme_1.parseTheme)(natds_styles_1.themes[key].light);
    return result;
}, (0, createThemesObject_1.createThemesObject)());
exports.default = exports.themes;
//# sourceMappingURL=themes.js.map