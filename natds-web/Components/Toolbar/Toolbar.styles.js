var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.styles = void 0;
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var styles = function (_a) {
    var sizes = _a.sizes;
    return (0, createStyles_1.default)({
        prominent: {
            alignItems: 'flex-start',
            minHeight: sizes ? "".concat(sizes.hugeX, "px") : null,
            paddingBottom: sizes ? "".concat(sizes.small, "px") : null,
            paddingTop: sizes ? "".concat(sizes.tiny, "px") : null,
            '& .NatDSAppBarHighlight': {
                alignSelf: 'flex-end'
            }
        }
    });
};
exports.styles = styles;
exports.useStyles = (0, makeStyles_1.default)(exports.styles, { name: 'NatDSToolbar' });
//# sourceMappingURL=Toolbar.styles.js.map