"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    surface: {
        display: 'flex',
        width: function (_a) {
            var size = _a.size;
            return (size && theme.size[size]);
        },
        height: function (_a) {
            var size = _a.size;
            return (size && theme.size[size]);
        },
        borderRadius: function (_a) {
            var size = _a.size;
            return (size && theme.avatar[size].borderRadius);
        },
        backgroundColor: theme.color.primary,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    image: {
        objectFit: 'cover',
        height: '100%'
    },
    label: {
        color: theme.color.onPrimary,
        fontFamily: [theme.avatar.primary.fontFamily, theme.avatar.fallback.fontFamily],
        fontSize: function (_a) {
            var size = _a.size;
            return (size && theme.avatar[size].fontSize);
        },
        fontWeight: [theme.avatar.primary.fontWeight, theme.avatar.fallback.fontWeight],
        letterSpacing: function (_a) {
            var size = _a.size;
            return (size && theme.avatar[size].letterSpacing);
        },
        lineHeight: function (_a) {
            var size = _a.size;
            return (size && theme.avatar[size].lineHeight);
        },
        padding: theme.spacing.micro,
        textTransform: 'uppercase'
    },
    icon: {
        padding: theme.spacing.micro
    }
}); });
exports.default = styles;
//# sourceMappingURL=Avatar.styles.js.map