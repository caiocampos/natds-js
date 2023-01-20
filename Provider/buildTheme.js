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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTheme = void 0;
var themes_1 = __importDefault(require("../Themes/themes"));
var buildTheme = function (brand, mode, customOption) {
    var _a, _b;
    var theme = themes_1.default[brand][mode];
    if (customOption === 'typography') {
        return __assign(__assign({}, theme), { typography: __assign(__assign({}, theme.typography), { fontFamily: (_a = theme.typography.body) === null || _a === void 0 ? void 0 : _a.regular.fontFamily, fontWeightRegular: (_b = theme.typography.body) === null || _b === void 0 ? void 0 : _b.regular.fontWeight }) });
    }
    return theme;
};
exports.buildTheme = buildTheme;
//# sourceMappingURL=buildTheme.js.map