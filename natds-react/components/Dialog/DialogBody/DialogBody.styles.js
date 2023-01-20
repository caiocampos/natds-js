"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    content: {
        color: theme.color.highEmphasis,
        flex: '1 1 auto',
        fontFamily: [theme.dialog.body.primary.fontFamily, theme.dialog.body.fallback.fontFamily],
        fontSize: theme.dialog.body.fontSize,
        letterSpacing: theme.dialog.body.letterSpacing,
        lineHeight: theme.dialog.body.lineHeight,
        overflowY: 'auto',
        padding: theme.spacing.small,
        position: 'relative'
    }
}); });
exports.default = styles;
//# sourceMappingURL=DialogBody.styles.js.map