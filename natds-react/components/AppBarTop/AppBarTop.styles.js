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
var getBackgroundColor = function (theme) { return function (_a) {
    var color = _a.color;
    var backgroundColor = {
        default: theme.color.surface,
        primary: theme.color.primary,
        none: 'transparent',
        inverse: theme.color.highEmphasis
    };
    return color && backgroundColor[color];
}; };
var getTextColor = function (theme) { return function (_a) {
    var color = _a.color;
    var backgroundColor = {
        default: theme.color.onSurface,
        primary: theme.color.onPrimary,
        none: theme.color.highlight,
        inverse: theme.color.surface
    };
    return color && backgroundColor[color];
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    container: function (_a) {
        var behaviour = _a.behaviour, hide = _a.hide;
        var shared = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1100
        };
        if (behaviour === 'fixed') {
            return __assign({}, shared);
        }
        return __assign(__assign({}, shared), { transition: '0.3s ease-in-out', top: hide ? -1 * (theme.size.mediumX + theme.spacing.micro * 2) : 0 });
    },
    appBar: {
        alignItems: 'center',
        display: 'flex',
        flex: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: theme.size.mediumX,
        padding: [theme.spacing.micro, theme.spacing.tiny],
        width: 'auto',
        backgroundColor: getBackgroundColor(theme),
        boxShadow: function (_a) {
            var elevation = _a.elevation;
            return (elevation ? theme.elevation.tiny : 'none');
        },
        color: getTextColor(theme),
        fontFamily: [
            theme.appBarTop.title.primary.fontFamily,
            theme.appBarTop.title.fallback.fontFamily
        ],
        fontSize: theme.appBarTop.title.fontSize,
        fontWeight: theme.appBarTop.title.primary.fontWeight,
        letterSpacing: theme.appBarTop.title.letterSpacing,
        lineHeight: theme.appBarTop.title.lineHeight
    }
}); });
exports.default = styles;
//# sourceMappingURL=AppBarTop.styles.js.map