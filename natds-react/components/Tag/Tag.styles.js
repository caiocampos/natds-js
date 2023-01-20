"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var getBorderStyles = function (theme) { return function (_a) {
    var position = _a.position, size = _a.size;
    var border = {
        center: size && theme.tag[size].borderRadius.enable,
        left: size && "".concat(theme.tag[size].borderRadius.disable, "px ").concat(theme.tag[size].borderRadius.enable, "px ").concat(theme.tag[size].borderRadius.enable, "px ").concat(theme.tag[size].borderRadius.disable, "px"),
        right: size && "".concat(theme.tag[size].borderRadius.enable, "px ").concat(theme.tag[size].borderRadius.disable, "px ").concat(theme.tag[size].borderRadius.disable, "px ").concat(theme.tag[size].borderRadius.enable, "px")
    };
    return position && border[position];
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        display: 'flex'
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.size.micro,
        backgroundColor: function (_a) {
            var customBackgroundColor = _a.customBackgroundColor, _b = _a.color, color = _b === void 0 ? 'primary' : _b;
            return (customBackgroundColor || theme.tag.color.background[color]);
        },
        borderRadius: getBorderStyles(theme),
        height: function (_a) {
            var size = _a.size;
            return size && theme.size[size];
        },
        padding: [0, theme.spacing.tiny],
        overflow: 'hidden'
    },
    content: {
        color: function (_a) {
            var customLabelColor = _a.customLabelColor, _b = _a.color, color = _b === void 0 ? 'primary' : _b;
            return (customLabelColor || theme.tag.color.label[color]);
        },
        fontFamily: [theme.tag.label.primary.fontFamily, theme.tag.label.fallback.fontFamily],
        fontSize: theme.tag.label.fontSize,
        fontWeight: theme.tag.label.primary.fontWeight,
        letterSpacing: theme.tag.label.letterSpacing,
        lineHeight: theme.tag.label.lineHeight,
        userSelect: 'none',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
}); });
exports.default = styles;
//# sourceMappingURL=Tag.styles.js.map