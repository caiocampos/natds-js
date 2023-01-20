var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpacingFromStylePropValue = exports.getSpacingFromStyleProp = void 0;
var useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
var useSpacingPropNames_1 = require("../useSpacingPropNames");
var useSizeStyleProp_1 = require("../useSizeStyleProp");
var getSpacingFromStyleProp = function (_a) {
    var props = _a.props, stylePropName = _a.stylePropName, theme = _a.theme;
    var spacingPropNames = (0, useSpacingPropNames_1.getSpacingPropNames)(stylePropName);
    var spacingPropValues = spacingPropNames.map(function (componentPropKey) {
        var value = props[componentPropKey];
        return (0, useSizeStyleProp_1.getSizeStyleProp)({ theme: theme, value: value });
    });
    return spacingPropValues.find(function (value) { return ![null, ''].includes(value); });
};
exports.getSpacingFromStyleProp = getSpacingFromStyleProp;
var useSpacingFromStylePropValue = function (_a) {
    var props = _a.props, stylePropName = _a.stylePropName;
    var theme = (0, useTheme_1.default)();
    return (0, exports.getSpacingFromStyleProp)({ props: props, stylePropName: stylePropName, theme: theme });
};
exports.useSpacingFromStylePropValue = useSpacingFromStylePropValue;
exports.default = exports.useSpacingFromStylePropValue;
//# sourceMappingURL=index.js.map