var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.styles = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types */
var createStyles_1 = __importDefault(require("@material-ui/core/styles/createStyles"));
var makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
/**
 * @param   {IThemeWeb}   theme   The provided theme
 * @return  {FabStyles}           Styles for `color="primary"
 */
var getStylesForPrimary = function (theme) {
    var primary = {};
    if (theme.palette && theme.palette.primary) {
        primary.backgroundColor = theme.palette.primary.main;
        primary.color = theme.palette.primary.contrastText;
    }
    return primary;
};
/**
 * @param   {IThemeWeb}   theme   The provided theme
 * @return  {FabStyles}           Styles for `color="light"`
 */
var getStylesForRoot = function (theme) {
    var root = {};
    if (theme.palette && theme.palette.background) {
        root.backgroundColor = theme.palette.background.default;
        root.color = theme.palette.background.defaultContrastText;
    }
    return root;
};
/**
 * @param   {IThemeWeb}   theme   The provided theme
 * @return  {FabStyles}           Styles for `color="secondary"`
 */
var getStylesForSecondary = function (theme) {
    var secondary = {};
    if (theme.palette && theme.palette.secondary) {
        secondary.backgroundColor = theme.palette.secondary.main;
        secondary.color = theme.palette.secondary.contrastText;
    }
    return secondary;
};
var styles = function (theme) {
    var root = getStylesForRoot(theme);
    if (theme.shadows) {
        /**
         * @todo Adopt `natds-themes` elevation token
         */
        // eslint-disable-next-line prefer-destructuring
        root.boxShadow = theme.shadows[4];
    }
    return {
        root: root,
        primary: getStylesForPrimary(theme),
        secondary: getStylesForSecondary(theme)
    };
};
exports.styles = styles;
exports.useStyles = (0, makeStyles_1.default)((0, createStyles_1.default)(exports.styles), { name: 'NatDSFab' });
//# sourceMappingURL=Fab.styles.js.map