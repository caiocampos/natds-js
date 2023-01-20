var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var styles = (0, createStyles_1.default)({
    root: {
        flexGrow: 1
    }
});
exports.useStyles = (0, makeStyles_1.default)(styles, { name: 'NatDSAppBarHighlight' });
exports.default = exports.useStyles;
//# sourceMappingURL=AppBarHighlight.styles.js.map