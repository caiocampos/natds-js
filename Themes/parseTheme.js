var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTheme = void 0;
var parseShadows_1 = require("./parseShadows");
var parseTheme = function (theme) {
    var shadows = theme.shadows;
    return __assign(__assign({}, theme), { shadows: (0, parseShadows_1.parseShadows)(shadows), typography: theme.typography });
};
exports.parseTheme = parseTheme;
exports.default = exports.parseTheme;
//# sourceMappingURL=parseTheme.js.map