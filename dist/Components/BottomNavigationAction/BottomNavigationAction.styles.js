var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var style = function (_a) {
    var _b;
    var palette = _a.palette, caption = _a.typography.caption;
    return (0, createStyles_1.default)({
        label: {
            '&$selected': {
                fontSize: caption === null || caption === void 0 ? void 0 : caption.fontSize
            }
        },
        selected: {
            color: (_b = palette === null || palette === void 0 ? void 0 : palette.text) === null || _b === void 0 ? void 0 : _b.primary
        }
    });
};
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSBottomNavigationAction' });
exports.default = exports.useStyles;
//# sourceMappingURL=BottomNavigationAction.styles.js.map