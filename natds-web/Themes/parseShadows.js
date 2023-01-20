Object.defineProperty(exports, "__esModule", { value: true });
exports.parseShadows = void 0;
var styles_1 = require("@material-ui/core/styles");
var parseShadows = function (shadows) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var outShadows = [];
    (0, styles_1.createTheme)({}).shadows.forEach(function (shadow, index) {
        if (shadows[String(index)]) {
            outShadows.push(shadows[String(index)]);
        }
        else {
            outShadows.push(shadow);
        }
    });
    return outShadows;
};
exports.parseShadows = parseShadows;
exports.default = exports.parseShadows;
//# sourceMappingURL=parseShadows.js.map