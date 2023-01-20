"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var getIconPosition = function () { return function (_a) {
    var iconPosition = _a.iconPosition;
    return (iconPosition === 'right' ? 'row' : 'row-reverse');
}; };
var getLabelMargin = function (theme, side) { return function (_a) {
    var iconPosition = _a.iconPosition;
    return (iconPosition === side && theme.size.tiny);
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    container: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: getIconPosition(),
        justifyContent: 'center',
        width: 'fit-content',
        cursor: 'pointer'
    },
    link: {
        color: function (_a) {
            var textColor = _a.textColor;
            return (textColor && textColor === 'default' ? theme.color.link : theme.color.lowEmphasis);
        },
        fontFamily: [theme.link.label.primary.fontFamily, theme.link.label.fallback.fontFamily],
        fontSize: theme.link.label.fontSize,
        letterSpacing: theme.link.label.letterSpacing,
        lineHeight: theme.link.label.lineHeight,
        textDecoration: function (_a) {
            var variant = _a.variant;
            return (variant === 'underline' ? 'underline' : 'none');
        },
        marginLeft: getLabelMargin(theme, 'left'),
        marginRight: getLabelMargin(theme, 'right'),
        '&:hover': {
            textDecoration: function (_a) {
                var variant = _a.variant;
                return (variant === 'underline' ? 'none' : 'underline');
            }
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Link.styles.js.map