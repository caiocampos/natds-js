var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("../../styles/createStyles"));
var makeStyles_1 = require("../../styles/makeStyles");
var getLogoSize = function (theme) { return function (_a) {
    var size = _a.size;
    return size && theme.sizes && "".concat(theme.sizes[size], "px");
}; };
var getLogoColor = function (theme) { return function (_a) {
    var color = _a.color;
    return color !== 'neutral' && theme.color && color && theme.color[color];
}; };
var styles = function (theme) { return (0, createStyles_1.default)({
    root: {
        '& svg': {
            height: '100%',
            width: getLogoSize(theme),
            '& path': {
                fill: getLogoColor(theme)
            }
        }
    }
}); };
exports.useStyles = (0, makeStyles_1.makeStyles)(styles, { name: 'NatDSLogo' });
exports.default = exports.useStyles;
//# sourceMappingURL=Logo.styles.js.map