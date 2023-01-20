var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.styles = exports.getLabelStyles = exports.getRootStyles = void 0;
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var getRootStyles = function (theme) {
    var _a, _b;
    if (typeof theme === 'undefined' || typeof theme.sizes === 'undefined' || typeof theme.sizes.small === 'undefined') {
        return {};
    }
    return {
        paddingLeft: (_a = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _a === void 0 ? void 0 : _a.small,
        paddingRight: (_b = theme === null || theme === void 0 ? void 0 : theme.sizes) === null || _b === void 0 ? void 0 : _b.small
    };
};
exports.getRootStyles = getRootStyles;
var getLabelStyles = function (theme) {
    var _a;
    if (typeof theme === 'undefined' || typeof theme.sizes === 'undefined') {
        return {};
    }
    return {
        lineHeight: "".concat(theme.sizes.standard, "px"),
        height: (_a = theme.sizes) === null || _a === void 0 ? void 0 : _a.standard,
        marginBottom: theme.sizes.tiny,
        marginTop: theme.sizes.tiny
    };
};
exports.getLabelStyles = getLabelStyles;
var styles = function (theme) { return ({
    root: (0, exports.getRootStyles)(theme),
    label: (0, exports.getLabelStyles)(theme)
}); };
exports.styles = styles;
exports.useStyles = (0, makeStyles_1.default)((0, createStyles_1.default)(exports.styles), { name: 'NatDSButton' });
exports.default = exports.useStyles;
//# sourceMappingURL=Button.styles.js.map