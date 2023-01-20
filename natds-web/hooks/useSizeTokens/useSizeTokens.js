var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSizeTokens = void 0;
var useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
var getSizeTokens_1 = require("./getSizeTokens");
var useSizeTokens = function () {
    var theme = (0, useTheme_1.default)();
    return (0, getSizeTokens_1.getSizeTokens)(theme);
};
exports.useSizeTokens = useSizeTokens;
exports.default = exports.useSizeTokens;
//# sourceMappingURL=useSizeTokens.js.map