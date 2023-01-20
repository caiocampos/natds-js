"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var getPaddingStyles = function (theme) { return function (_a) {
    var size = _a.size;
    var padding = {
        semi: theme.spacing.micro,
        medium: theme.spacing.small,
        semiX: theme.spacing.tiny
    };
    return size && padding[size];
}; };
var getLabelMargin = function (theme, side) { return function (_a) {
    var showIcon = _a.showIcon, iconPosition = _a.iconPosition;
    return (showIcon && iconPosition === side && theme.size.tiny);
}; };
var getIconPosition = function () { return function (_a) {
    var showIcon = _a.showIcon, iconPosition = _a.iconPosition;
    return (showIcon && iconPosition === 'right' ? 'row' : 'row-reverse');
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    button: {
        backgroundColor: function (_a) {
            var variant = _a.variant;
            return variant && theme.button[variant].color.enable.background;
        },
        border: function (_a) {
            var variant = _a.variant;
            return variant && "1px solid ".concat(theme.button[variant].color.enable.border);
        },
        borderRadius: theme.button.borderRadius,
        boxShadow: function (_a) {
            var variant = _a.variant;
            return variant && (variant === 'contained' ? theme.elevation.tiny : 'none');
        },
        color: function (_a) {
            var variant = _a.variant;
            return variant && theme.button[variant].color.enable.label;
        },
        cursor: 'pointer',
        height: function (_a) {
            var size = _a.size;
            return size && theme.size[size];
        },
        outline: 0,
        overflow: 'hidden',
        paddingLeft: getPaddingStyles(theme),
        paddingRight: getPaddingStyles(theme),
        position: 'relative',
        width: function (_a) {
            var fullWidth = _a.fullWidth;
            return (fullWidth ? '100%' : 'auto');
        },
        '&:disabled': {
            backgroundColor: function (_a) {
                var variant = _a.variant;
                return variant && theme.button[variant].color.disable.background;
            },
            border: function (_a) {
                var variant = _a.variant;
                return variant && "1px solid ".concat(theme.button[variant].color.disable.border);
            },
            boxShadow: theme.elevation.none,
            color: function (_a) {
                var variant = _a.variant;
                return variant && theme.button[variant].color.disable.label;
            },
            cursor: 'default'
        },
        '&:hover:not([disabled])': {
            backgroundColor: function (_a) {
                var variant = _a.variant;
                return variant && theme.button[variant].color.hover.background;
            },
            border: function (_a) {
                var variant = _a.variant;
                return variant && "1px solid ".concat(theme.button[variant].color.hover.border);
            },
            color: function (_a) {
                var variant = _a.variant;
                return variant && theme.button[variant].color.hover.label;
            }
        },
        '&:focus:not([disabled])': {
            backgroundColor: function (_a) {
                var variant = _a.variant;
                return variant && theme.button[variant].color.focus.background;
            },
            border: function (_a) {
                var variant = _a.variant;
                return variant && "1px solid ".concat(theme.button[variant].color.focus.border);
            },
            color: function (_a) {
                var variant = _a.variant;
                return variant && theme.button[variant].color.focus.label;
            }
        }
    },
    labelContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: getIconPosition(),
        justifyContent: 'center'
    },
    label: {
        fontFamily: [theme.button.label.primary.fontFamily, theme.button.label.fallback.fontFamily],
        fontSize: theme.button.label.fontSize,
        fontWeight: theme.button.label.primary.fontWeight,
        letterSpacing: theme.button.label.letterSpacing,
        marginLeft: getLabelMargin(theme, 'left'),
        marginRight: getLabelMargin(theme, 'right'),
        textAlign: 'center',
        textOverflow: 'ellipsis',
        textTransform: 'uppercase',
        userSelect: 'none',
        whiteSpace: 'nowrap'
    }
}); });
exports.default = styles;
//# sourceMappingURL=Button.styles.js.map