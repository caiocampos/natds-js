Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpacingPropNames = exports.getSpacingPropNames = void 0;
var getSpacingPropNames = function (stylePropName) {
    var spacingPropsToCssPropsMap = {
        marginBottom: ['marginBottom', 'mb', 'marginY', 'my', 'margin', 'm'],
        marginLeft: ['marginLeft', 'ml', 'marginX', 'mx', 'margin', 'm'],
        marginRight: ['marginRight', 'mr', 'marginX', 'mx', 'margin', 'm'],
        marginTop: ['marginTop', 'mt', 'marginY', 'my', 'margin', 'm'],
        paddingBottom: ['paddingBottom', 'pb', 'paddingY', 'py', 'padding', 'p'],
        paddingLeft: ['paddingLeft', 'pl', 'paddingX', 'px', 'padding', 'p'],
        paddingRight: ['paddingRight', 'pr', 'paddingX', 'px', 'padding', 'p'],
        paddingTop: ['paddingTop', 'pr', 'paddingY', 'py', 'padding', 'p']
    };
    return spacingPropsToCssPropsMap[stylePropName];
};
exports.getSpacingPropNames = getSpacingPropNames;
var useSpacingPropNames = function (stylePropName) { return (0, exports.getSpacingPropNames)(stylePropName); };
exports.useSpacingPropNames = useSpacingPropNames;
exports.default = exports.useSpacingPropNames;
//# sourceMappingURL=index.js.map