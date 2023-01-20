"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable complexity */
var react_jss_1 = require("react-jss");
var setBaseStyle = function () { return function (_a) {
    var color = _a.color, borderType = _a.borderType, customBackgroundColor = _a.customBackgroundColor, customIconColor = _a.customIconColor, customBorderColor = _a.customBorderColor;
    var variantStyle = {
        info: {
            background: '#D0EBFF',
            border: borderType === 'outlined' ? 'solid 1px #1C7ED6' : 'none'
        },
        success: {
            background: '#D3F9D8',
            border: borderType === 'outlined' ? 'solid 1px #37B24D' : 'none'
        },
        error: {
            background: '#FFE3E3',
            border: borderType === 'outlined' ? 'solid 1px #F03E3E' : 'none'
        },
        warning: {
            background: '#FFF3BF',
            border: borderType === 'outlined' ? 'solid 1px #F59F00' : 'none'
        },
        custom: {
            background: "".concat(customBackgroundColor, "29"),
            border: borderType === 'outlined' ? "solid 1px ".concat(customBorderColor) : 'none',
            '& > i': {
                color: customIconColor
            }
        }
    };
    return variantStyle[color];
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: function (props) { return (__assign(__assign({}, setBaseStyle()(props)), { display: 'flex', gap: theme.spacing.tiny, fontFamily: theme.typography.body.regular.fontFamily, padding: theme.spacing.small, borderRadius: theme.alert.borderRadius })); },
    content: {
        color: function (_a) {
            var color = _a.color, customTextColor = _a.customTextColor;
            return (color === 'custom' ? customTextColor : theme.color.highEmphasis);
        },
        '& > h6': {
            margin: "0 0 ".concat(theme.spacing.tiny, "px 0"),
            fontSize: theme.heading6.fontSize
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Alert.styles.js.map