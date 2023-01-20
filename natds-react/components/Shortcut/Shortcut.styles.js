"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var setBoxShadow = function (theme) { return function (_a) {
    var variant = _a.variant, disabled = _a.disabled;
    return variant === 'contained' && !disabled && theme.elevation.tiny;
}; };
var setLabelColor = function (theme) { return function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'contained' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d;
    return (color && variant && !disabled ? theme.shortcut[variant].color.enable[color].label : theme.shortcut[variant].color.disable[color].label);
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: theme.size.mediumX
    },
    container: {
        position: 'relative'
    },
    content: {
        backgroundColor: function (_a) {
            var color = _a.color, variant = _a.variant;
            return color && variant && theme.shortcut[variant].color.enable[color].background;
        },
        border: function (_a) {
            var color = _a.color, variant = _a.variant;
            return color && variant && "1px solid ".concat(theme.shortcut[variant].color.enable[color].border);
        },
        boxShadow: setBoxShadow(theme),
        borderRadius: theme.shortcut.borderRadius,
        '&:after': {
            backgroundColor: theme.color.highlight,
            content: '" "',
            height: '100%',
            left: 0,
            opacity: 0,
            position: 'absolute',
            top: 0,
            width: '100%'
        },
        '&:disabled': {
            backgroundColor: function (_a) {
                var color = _a.color, variant = _a.variant;
                return color && variant && theme.shortcut[variant].color.disable[color].background;
            },
            border: function (_a) {
                var color = _a.color, variant = _a.variant;
                return color && variant && "1px solid ".concat(theme.shortcut[variant].color.disable[color].border);
            },
            boxShadow: theme.elevation.none,
            cursor: 'default'
        },
        '&:hover:not([disabled])': {
            backgroundColor: function (_a) {
                var color = _a.color, variant = _a.variant;
                return color && variant && theme.shortcut[variant].color.hover[color].background;
            },
            border: function (_a) {
                var color = _a.color, variant = _a.variant;
                return color && variant && "1px solid ".concat(theme.shortcut[variant].color.hover[color].border);
            }
        },
        '&:focus:not([disabled])': {
            backgroundColor: function (_a) {
                var color = _a.color, variant = _a.variant;
                return color && variant && theme.shortcut[variant].color.focus[color].background;
            },
            border: function (_a) {
                var color = _a.color, variant = _a.variant;
                return color && variant && "1px solid ".concat(theme.shortcut[variant].color.focus[color].border);
            }
        }
    },
    labelText: {
        fontFamily: [theme.shortcut.label.primary.fontFamily, theme.shortcut.label.fallback.fontFamily],
        fontSize: theme.shortcut.label.fontSize,
        fontWeight: theme.shortcut.label.primary.fontWeight,
        letterSpacing: theme.shortcut.label.letterSpacing,
        width: theme.size.mediumX,
        textAlign: 'center',
        marginTop: theme.spacing.tiny,
        whiteSpace: function (_a) {
            var breakLine = _a.breakLine;
            return (breakLine ? 'normal' : 'nowrap');
        },
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        color: setLabelColor(theme),
        '&:hover': {
            color: function (_a) {
                var color = _a.color, variant = _a.variant, disabled = _a.disabled;
                return color && variant && !disabled && theme.shortcut[variant].color.hover[color].label;
            }
        }
    },
    badgeContainer: {
        position: 'absolute',
        right: 0,
        top: 0
    }
}); });
exports.default = styles;
//# sourceMappingURL=Shortcut.styles.js.map