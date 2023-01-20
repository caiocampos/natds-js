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
var react_jss_1 = require("react-jss");
var overlay = function (theme) { return ({
    content: '" "',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.color.highlight,
    opacity: theme.opacity.lower
}); };
var applyOpenStyle = function (theme) { return function (_a) {
    var isActive = _a.isActive;
    if (isActive) {
        return overlay(theme);
    }
    return {};
}; };
var applyClickStyle = function (theme) {
    var baseOverlay = overlay(theme);
    baseOverlay.opacity = theme.opacity.veryLow;
    return baseOverlay;
};
var setBackgroundColor = function (theme) { return function (_a) {
    var isDisabled = _a.isDisabled, color = _a.color;
    if (isDisabled) {
        return theme.color.lowEmphasis;
    }
    return color === 'regular' ? theme.color.surface : theme.color.primary;
}; };
var setLegendColor = function (theme) { return function (_a) {
    var isDisabled = _a.isDisabled, color = _a.color;
    if (isDisabled) {
        return theme.color.mediumEmphasis;
    }
    return color === 'regular' ? theme.color.mediumEmphasis : theme.color.highEmphasis;
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        background: theme.color.surface,
        fontFamily: theme.typography.fontFamily.primary,
        color: function (_a) {
            var isDisabled = _a.isDisabled;
            return (isDisabled ? theme.color.mediumEmphasis : theme.color.highEmphasis);
        },
        pointerEvents: function (_a) {
            var isDisabled = _a.isDisabled;
            return (isDisabled ? 'none' : 'auto');
        }
    },
    header: function (props) { return ({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: "".concat(theme.spacing.small, "px ").concat(theme.spacing.standard, "px"),
        position: 'relative',
        background: setBackgroundColor(theme)(props),
        '& > div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: theme.typography.fontWeight.medium
        },
        '& > span': {
            fontSize: theme.typography.fontSize.level1,
            marginTop: theme.spacing.small
        },
        '&:before': __assign({}, applyOpenStyle(theme)(props)),
        '&:active:after': __assign({}, applyClickStyle(theme)),
        '&:hover': {
            cursor: 'pointer'
        },
        '&:hover:before': __assign({}, overlay(theme))
    }); },
    legend: {
        color: setLegendColor(theme)
    },
    content: {
        minHeight: theme.size.semiX,
        padding: "".concat(theme.spacing.small, "px ").concat(theme.spacing.standard, "px"),
        fontWeight: theme.typography.fontWeight.regular
    }
}); });
exports.default = styles;
//# sourceMappingURL=AccordionItem.styles.js.map