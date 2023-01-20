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
exports.styles = exports.getStylesForColor = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
// eslint-disable-next-line complexity
var getStylesForColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    var fallback = {};
    var root = {};
    var palette = theme.palette;
    /**
     * @todo fix Element implicitly has an 'any' type because expression of type 'string' can't be used to index type
     */
    if (typeof color === 'string'
        && color !== 'default'
        && typeof palette !== 'undefined'
        // @ts-ignore
        && typeof palette[color] !== 'undefined') {
        // @ts-ignore
        var colorObject = palette[color];
        root.backgroundColor = colorObject.main;
        root.color = colorObject.contrastText;
        fallback.color = colorObject.contrastText;
        fallback.fill = colorObject.contrastText;
    }
    return { fallback: fallback, root: root };
};
exports.getStylesForColor = getStylesForColor;
var getStylesForSize = function (_a) {
    var size = _a.size, theme = _a.theme;
    var fallback = {};
    var root = {};
    var avatarSizes = theme.avatarSizes;
    if (size && avatarSizes && avatarSizes[size]) {
        root.fontSize = avatarSizes[size].fontSize;
        root.height = avatarSizes[size].size;
        root.width = avatarSizes[size].size;
    }
    return { fallback: fallback, root: root };
};
var styles = function (_a) {
    var color = _a.color, size = _a.size, theme = _a.theme;
    var colorStyles = (0, exports.getStylesForColor)({ color: color, theme: theme });
    var sizeStyles = getStylesForSize({ size: size, theme: theme });
    return (0, createStyles_1.default)({
        root: __assign(__assign({}, colorStyles.root), sizeStyles.root),
        fallback: __assign(__assign({}, colorStyles.fallback), sizeStyles.fallback)
    });
};
exports.styles = styles;
exports.default = exports.styles;
//# sourceMappingURL=Avatar.styles.js.map