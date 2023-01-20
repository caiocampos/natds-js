var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
var style = function (_a) {
    var palette = _a.palette;
    if (typeof palette === 'undefined') {
        return (0, createStyles_1.default)({
            default: {},
            error: {},
            info: {},
            success: {}
        });
    }
    var background = palette.background, complementary = palette.complementary, error = palette.error, success = palette.success;
    return (0, createStyles_1.default)({
        default: {
            backgroundColor: background === null || background === void 0 ? void 0 : background.paperContrastText,
            color: background === null || background === void 0 ? void 0 : background.paper
        },
        error: {
            backgroundColor: error === null || error === void 0 ? void 0 : error.main,
            color: error === null || error === void 0 ? void 0 : error.contrastText
        },
        info: {
            backgroundColor: complementary === null || complementary === void 0 ? void 0 : complementary.link,
            color: complementary === null || complementary === void 0 ? void 0 : complementary.linkContrastText
        },
        success: {
            backgroundColor: success === null || success === void 0 ? void 0 : success.main,
            color: success === null || success === void 0 ? void 0 : success.contrastText
        },
        warning: {
            backgroundColor: complementary === null || complementary === void 0 ? void 0 : complementary.warning,
            color: complementary === null || complementary === void 0 ? void 0 : complementary.warningContrastText
        }
    });
};
exports.useStyles = (0, makeStyles_1.default)(style, { name: 'NatDSSnackbarContent' });
//# sourceMappingURL=SnackbarContent.styles.js.map