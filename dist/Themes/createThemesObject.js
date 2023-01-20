Object.defineProperty(exports, "__esModule", { value: true });
exports.createThemesObject = void 0;
var natds_styles_1 = require("@naturacosmeticos/natds-styles");
var createThemesObject = function () {
    var keys = Object.keys(natds_styles_1.themes);
    var newThemes = {};
    keys.forEach(function (key) {
        newThemes[key] = {
            dark: {},
            light: {}
        };
        return newThemes[key];
    });
    return newThemes;
};
exports.createThemesObject = createThemesObject;
exports.default = exports.createThemesObject;
//# sourceMappingURL=createThemesObject.js.map