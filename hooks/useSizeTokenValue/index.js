var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSizeTokenValue = exports.getSizeTokenValue = void 0;
var useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
var useSizeTokens_1 = require("../useSizeTokens");
var getSizeTokenValue = function (_a) {
    var name = _a.name, theme = _a.theme;
    if (typeof name !== 'string') {
        return null;
    }
    var sizeTokens = (0, useSizeTokens_1.getSizeTokens)(theme);
    if (typeof sizeTokens === 'undefined') {
        return null;
    }
    return sizeTokens[name];
};
exports.getSizeTokenValue = getSizeTokenValue;
var useSizeTokenValue = function (sizeTokenName) {
    var theme = (0, useTheme_1.default)();
    return (0, exports.getSizeTokenValue)({ name: sizeTokenName, theme: theme });
};
exports.useSizeTokenValue = useSizeTokenValue;
//# sourceMappingURL=index.js.map