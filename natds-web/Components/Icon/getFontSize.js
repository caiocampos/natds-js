Object.defineProperty(exports, "__esModule", { value: true });
exports.getFontSize = void 0;
var getFontSize = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'standard' : _b, theme = _a.theme;
    /**
     * @todo fix TS7053: Element implicitly has an 'any' type, expression of type 'string' can't be used to index type {}
     */
    if (typeof theme !== 'undefined' && typeof theme.iconSizes !== 'undefined' && typeof theme.iconSizes[size] !== 'undefined') {
        var iconSizes = theme.iconSizes;
        var fontSize = iconSizes[size];
        return "".concat(fontSize, "px");
    }
    return '1em';
};
exports.getFontSize = getFontSize;
//# sourceMappingURL=getFontSize.js.map