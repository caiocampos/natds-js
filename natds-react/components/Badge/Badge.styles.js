"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var convertoPulseToDot = function (variant) { return (variant === 'pulse' ? 'dot' : variant); };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    badge: {
        backgroundColor: function (_a) {
            var color = _a.color;
            return theme.badge.color[color].background;
        },
        borderRadius: function (_a) {
            var variant = _a.variant;
            return theme.badge[convertoPulseToDot(variant)].borderRadius;
        },
        display: 'flex',
        height: function (_a) {
            var variant = _a.variant;
            return theme.badge[convertoPulseToDot(variant)].height;
        },
        paddingLeft: function (_a) {
            var variant = _a.variant;
            return variant === 'standard' && theme.spacing.micro;
        },
        paddingRight: function (_a) {
            var variant = _a.variant;
            return variant === 'standard' && theme.spacing.micro;
        },
        position: 'relative',
        width: function (_a) {
            var variant = _a.variant;
            return variant !== 'standard' && theme.badge[convertoPulseToDot(variant)].height;
        },
        '&:after': {
            transition: 'opacity 4ms linear, transition 4ms linear',
            animation: '$badge 1.6s infinite',
            backgroundColor: function (_a) {
                var color = _a.color;
                return theme.badge.color[color].background;
            },
            borderRadius: function (_a) {
                var variant = _a.variant;
                return theme.badge[convertoPulseToDot(variant)].borderRadius;
            },
            content: function (_a) {
                var variant = _a.variant;
                return variant === 'pulse' && '""';
            },
            height: '100%',
            position: 'absolute',
            width: '100%'
        }
    },
    label: {
        color: function (_a) {
            var color = _a.color;
            return theme.badge.color[color].label;
        },
        fontFamily: [theme.badge.label.primary.fontFamily, theme.badge.label.fallback.fontFamily],
        fontSize: theme.badge.label.fontSize,
        fontWeight: theme.badge.label.primary.fontWeight,
        letterSpacing: theme.badge.label.letterSpacing,
        lineHeight: theme.badge.label.lineHeight
    },
    '@keyframes badge': {
        '0%': {
            opacity: theme.opacity.medium,
            transform: 'scale(1)'
        },
        '100%': {
            opacity: theme.opacity.transparent,
            transform: 'scale(2.25)'
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Badge.styles.js.map