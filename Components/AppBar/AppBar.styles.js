var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.styles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var styles_1 = require("@material-ui/core/styles");
var styles = function (theme) {
    var colorDefault = {};
    if (typeof theme.palette === 'undefined'
        || typeof theme.palette.background === 'undefined') {
        return { colorDefault: colorDefault };
    }
    if (typeof theme.palette.background.paper !== 'undefined') {
        colorDefault.backgroundColor = theme.palette.background.paper;
    }
    if (typeof theme.palette.background.paperContrastText !== 'undefined') {
        colorDefault.color = theme.palette.background.paperContrastText;
    }
    return { colorDefault: colorDefault };
};
exports.styles = styles;
exports.useStyles = (0, styles_1.makeStyles)((0, createStyles_1.default)(exports.styles), { name: 'NatDSAppBar' });
exports.default = exports.useStyles;
//# sourceMappingURL=AppBar.styles.js.map