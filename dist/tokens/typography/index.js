var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fontSize = exports.getFontSize = void 0;
/* eslint-disable sort-keys */
var natds_themes_1 = __importDefault(require("@naturacosmeticos/natds-themes"));
var getFontSize = function (theme) { return ({
    h1: theme.heading1,
    h2: theme.heading2,
    h3: theme.heading3,
    h4: theme.heading4,
    h5: theme.heading5,
    h6: theme.heading6,
    subtitle1: theme.subtitle1,
    subtitle2: theme.subtitle2,
    body1: theme.body1,
    body2: theme.body2,
    button: theme.button.label,
    caption: theme.caption,
    overline: theme.overline
}); };
exports.getFontSize = getFontSize;
var staticTheme = natds_themes_1.default.natura.light;
/**
 * @deprecated since 0.19. It will be removed at 1.0.
 * Please use typography tokens directly from the theme.
 */
exports.fontSize = {
    h1: staticTheme.heading1,
    h2: staticTheme.heading2,
    h3: staticTheme.heading3,
    h4: staticTheme.heading4,
    h5: staticTheme.heading5,
    h6: staticTheme.heading6,
    subtitle1: staticTheme.subtitle1,
    subtitle2: staticTheme.subtitle2,
    body1: staticTheme.body1,
    body2: staticTheme.body2,
    button: staticTheme.button.label,
    caption: staticTheme.caption,
    overline: staticTheme.overline
};
//# sourceMappingURL=index.js.map