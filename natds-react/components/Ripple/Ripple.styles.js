"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    sharedRippleEffect: {
        content: '" "',
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: -1
    },
    wrapper: {
        flexBasis: function (_a) {
            var fullWidth = _a.fullWidth;
            return fullWidth && '100%';
        },
        cursor: function (_a) {
            var disabled = _a.disabled;
            return (disabled ? 'default' : 'pointer');
        },
        display: function (_a) {
            var fullWidth = _a.fullWidth;
            return (fullWidth ? 'block' : 'inline-block');
        },
        position: 'relative',
        alignSelf: function (_a) {
            var fullWidth = _a.fullWidth;
            return (fullWidth ? 'stretch' : 'start');
        },
        outline: 'none',
        height: 'fit-content',
        '&:focus:after': {
            extend: 'sharedRippleEffect',
            backgroundColor: function (_a) {
                var color = _a.color, disabled = _a.disabled;
                return !disabled && theme.color[color];
            },
            opacity: theme.opacity.mediumLow
        },
        '&:hover:after': {
            extend: 'sharedRippleEffect',
            backgroundColor: function (_a) {
                var color = _a.color;
                return theme.color[color];
            },
            opacity: function (_a) {
                var showHover = _a.showHover, disabled = _a.disabled;
                return (!disabled && showHover ? theme.opacity.mediumLow : 0);
            }
        }
    },
    ripple: {
        backgroundColor: function (_a) {
            var color = _a.color;
            return theme.color[color];
        },
        borderRadius: '50%',
        height: function (_a) {
            var size = _a.size;
            return size;
        },
        left: function (_a) {
            var mousePosition = _a.mousePosition, isCentered = _a.isCentered;
            return (isCentered ? '50%' : mousePosition.x);
        },
        opacity: theme.opacity.transparent,
        position: 'absolute',
        top: function (_a) {
            var mousePosition = _a.mousePosition, isCentered = _a.isCentered;
            return (isCentered ? '50%' : mousePosition.y);
        },
        transform: 'translate(-50%, -50%)',
        transition: function (_a) {
            var animationDuration = _a.animationDuration;
            return "scale opacity ".concat(animationDuration, "ms");
        },
        width: function (_a) {
            var size = _a.size;
            return size;
        }
    },
    rippleContainer: {
        inset: 0,
        overflow: function (_a) {
            var hideOverflow = _a.hideOverflow;
            return (hideOverflow && 'hidden');
        },
        position: 'absolute'
    },
    rippleActive: {
        animation: function (_a) {
            var animationDuration = _a.animationDuration;
            return "$ripple ".concat(animationDuration, "ms");
        },
        zIndex: 99
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'translate(-50%, -50%) scale(0)'
        },
        '75%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: theme.opacity.low
        },
        '100%': {
            opacity: theme.opacity.transparent,
            zIndex: 0
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Ripple.styles.js.map