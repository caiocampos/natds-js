var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.getFontSize = void 0;
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var core_1 = require("@material-ui/core");
var getFontSize = function (theme) { return function (_a) {
    var size = _a.size;
    var sizes = theme.sizes;
    var nullValue = '';
    if (size && sizes && sizes[size]) {
        var fontSize = sizes[size];
        return "".concat(fontSize, "px");
    }
    return nullValue;
}; };
exports.getFontSize = getFontSize;
var style = function (theme) {
    var _a, _b;
    return (0, core_1.createStyles)({
        root: {
            fontSize: (0, exports.getFontSize)(theme)
        },
        iconEmpty: {
            color: (_b = (_a = theme.palette) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.secondary
        }
    });
};
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSRating' });
exports.default = exports.useStyles;
//# sourceMappingURL=Rating.styles.js.map