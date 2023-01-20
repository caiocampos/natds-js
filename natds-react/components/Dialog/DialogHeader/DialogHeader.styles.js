"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    header: {
        alignItems: 'center',
        display: 'flex',
        flexShrink: 0,
        justifyContent: 'space-between',
        padding: theme.size.small
    },
    title: {
        color: theme.color.highEmphasis,
        fontFamily: [theme.dialog.title.primary.fontFamily, theme.dialog.title.fallback.fontFamily],
        fontSize: theme.dialog.title.fontSize,
        fontWeight: theme.dialog.title.primary.fontWeight,
        letterSpacing: theme.dialog.title.letterSpacing,
        lineHeight: theme.dialog.title.lineHeight,
        margin: 0
    }
}); });
exports.default = styles;
//# sourceMappingURL=DialogHeader.styles.js.map