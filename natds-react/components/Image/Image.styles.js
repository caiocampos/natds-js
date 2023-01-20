"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var setBackground = function () { return function (_a) {
    var highlight = _a.highlight, fade = _a.fade;
    if (highlight && !fade) {
        return 'rgba(0, 0, 0, 0.48)';
    }
    if (highlight && fade) {
        return "linear-gradient(to ".concat(fade, ", transparent, #000)");
    }
    return 'transparent';
}; };
var setBorderRadius = function (theme) { return function (_a) {
    var border = _a.border;
    if (!border) {
        return 'none';
    }
    return border === 'medium' ? theme.borderRadius.medium : '50%';
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        position: 'relative',
        borderRadius: setBorderRadius(theme),
        overflow: 'hidden',
        '& > img': {
            width: '100%',
            height: '100%'
        }
    },
    overlay: {
        padding: theme.spacing.small,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: setBackground()
    }
}); });
exports.default = styles;
//# sourceMappingURL=Image.styles.js.map