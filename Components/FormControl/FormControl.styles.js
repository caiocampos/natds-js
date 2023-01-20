var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var style = function (_a) {
    var typography = _a.typography;
    return (0, createStyles_1.default)({
        root: {
            display: 'flex',
            flexFlow: 'column nowrap',
            fontFamily: typography.fontFamily
        }
    });
};
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSFormControl' });
exports.default = exports.useStyles;
//# sourceMappingURL=FormControl.styles.js.map