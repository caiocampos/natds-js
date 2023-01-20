var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.boxShadow = void 0;
var createStyles_1 = __importDefault(require("../../styles/createStyles"));
var makeStyles_1 = require("../../styles/makeStyles");
var boxShadow = function (_a) {
    var scrolled = _a.scrolled;
    if (scrolled) {
        return 'rgba(0, 0, 0, .14) inset 0 9px 5px -5px';
    }
    return 'none';
};
exports.boxShadow = boxShadow;
var style = function (_a) {
    var sizes = _a.sizes;
    return (0, createStyles_1.default)({
        root: {
            display: 'flex',
            flex: '1 1 auto',
            overflow: 'hidden',
            position: 'relative',
            '&::before': {
                boxShadow: exports.boxShadow,
                content: '""',
                height: sizes === null || sizes === void 0 ? void 0 : sizes.small,
                left: 0,
                pointerEvents: 'none',
                position: 'absolute',
                right: 0,
                top: 0,
                /**
                 * @todo replace hardcoded duration by time token
                 */
                transition: 'box-shadow ease-in-out .1s',
                zIndex: 2
            }
        },
        scroll: {
            flex: '1 1 auto',
            overflowY: 'auto',
            padding: "".concat(sizes === null || sizes === void 0 ? void 0 : sizes.none, " ").concat(sizes === null || sizes === void 0 ? void 0 : sizes.tiny, "px"),
            position: 'relative'
        }
    });
};
exports.useStyles = (0, makeStyles_1.makeStyles)(style, { name: 'NatDSDrawerBody' });
exports.default = exports.useStyles;
//# sourceMappingURL=DrawerBody.styles.js.map