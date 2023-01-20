var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSizeStyleProp = exports.getSizeStyleProp = void 0;
var useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
var useSizeTokenValue_1 = require("../useSizeTokenValue");
var getSizeStyleProp = function (_a) {
    var theme = _a.theme, value = _a.value;
    var nullValue = '';
    if (typeof value === 'undefined') {
        return nullValue;
    }
    if (typeof value === 'number' || value === 'auto') {
        return value;
    }
    var tokenValue = (0, useSizeTokenValue_1.getSizeTokenValue)({ name: value, theme: theme });
    if (typeof tokenValue === 'number') {
        return tokenValue;
    }
    return nullValue;
};
exports.getSizeStyleProp = getSizeStyleProp;
var useSizeStyleProp = function (value) {
    var theme = (0, useTheme_1.default)();
    return (0, exports.getSizeStyleProp)({ theme: theme, value: value });
};
exports.useSizeStyleProp = useSizeStyleProp;
exports.default = exports.useSizeStyleProp;
//# sourceMappingURL=index.js.map