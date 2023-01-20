var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDefaultTheme = exports.getDefaultTheme = void 0;
var styles_1 = require("@material-ui/core/styles");
var useTheme_1 = __importDefault(require("@material-ui/core/styles/useTheme"));
var Themes_1 = require("../../Themes");
var parserToString = function (theme) { return Object.entries(theme).sort().toString(); };
var isEqual = function (providedTheme, defaultTheme) { return parserToString(providedTheme) === parserToString(defaultTheme); };
var getDefaultTheme = function (providerTheme) {
    var parsedProviderTheme = JSON.parse(JSON.stringify(providerTheme));
    var parsedDefaultTheme = JSON.parse(JSON.stringify((0, styles_1.createTheme)({})));
    if (isEqual(parsedProviderTheme, parsedDefaultTheme)) {
        return (0, styles_1.createTheme)(Themes_1.themes.natura.light);
    }
    return providerTheme;
};
exports.getDefaultTheme = getDefaultTheme;
var useDefaultTheme = function () {
    var providerTheme = (0, useTheme_1.default)();
    return (0, exports.getDefaultTheme)(providerTheme);
};
exports.useDefaultTheme = useDefaultTheme;
exports.default = exports.useDefaultTheme;
//# sourceMappingURL=index.js.map