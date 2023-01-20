"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable complexity */
var react_jss_1 = require("react-jss");
var setFontFamily = function (theme) { return function (_a) {
    var variant = _a.variant;
    if (variant.includes('heading')) {
        return theme.typography.headline.fontFamily;
    }
    return theme.typography.body.regular.fontFamily;
}; };
var setTextTransform = function () { return function (_a) {
    var variant = _a.variant;
    if (variant === 'overline') {
        return 'uppercase';
    }
    return 'none';
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    text: {
        fontFamily: setFontFamily(theme),
        fontWeight: function (_a) {
            var variant = _a.variant;
            return theme[variant].fontWeight;
        },
        fontSize: function (_a) {
            var variant = _a.variant;
            return theme[variant].fontSize;
        },
        lineHeight: function (_a) {
            var variant = _a.variant;
            return theme[variant].lineHeight;
        },
        letterSpacing: function (_a) {
            var variant = _a.variant;
            return theme[variant].letterSpacing;
        },
        textTransform: setTextTransform()
    }
}); });
exports.default = styles;
//# sourceMappingURL=Typography.styles.js.map