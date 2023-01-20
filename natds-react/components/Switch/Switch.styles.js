"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
var react_jss_1 = require("react-jss");
var transitionProps = '150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms';
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    switchContainer: {
        width: 56,
        height: 40,
        position: 'relative',
        display: 'flex'
    },
    switchBase: {
        display: 'flex',
        alignItems: 'center',
        cursor: function (_a) {
            var disabled = _a.disabled;
            return (disabled ? 'default' : 'pointer');
        },
        pointerEvents: function (_a) {
            var disabled = _a.disabled;
            return (disabled ? 'none' : 'unset');
        },
        width: '100%',
        height: '100%',
        '&:hover $switchOverlay': {
            opacity: theme.opacity.veryLow,
            backgroundColor: function (_a) {
                var checked = _a.checked;
                return (checked ? theme.color.primary : theme.color.highlight);
            }
        }
    },
    switchInput: {
        position: 'absolute',
        opacity: 0,
        '&:focus + $switchBase $switchOverlay': {
            opacity: theme.opacity.low,
            backgroundColor: function (_a) {
                var checked = _a.checked;
                return (checked ? theme.color.primary : theme.color.highlight);
            }
        }
    },
    switchTrack: {
        transition: "background-color ".concat(transitionProps),
        left: 10,
        position: 'absolute',
        width: 36,
        height: 14,
        borderRadius: 20,
        backgroundColor: function (_a) {
            var checked = _a.checked, disabled = _a.disabled;
            return (disabled
                ? theme.color.lowEmphasis
                : checked
                    ? theme.color.primary
                    : theme.color.mediumEmphasis);
        },
        opacity: function (_a) {
            var checked = _a.checked, disabled = _a.disabled;
            return (disabled || !checked ? 1 : theme.opacity.medium);
        }
    },
    switchOverlay: {
        left: function (_a) {
            var checked = _a.checked;
            return (checked ? 16 : 0);
        },
        transition: "left ".concat(transitionProps),
        position: 'absolute',
        width: 40,
        height: 40,
        borderRadius: '50%'
    },
    switchThumb: {
        left: function (_a) {
            var checked = _a.checked;
            return (checked ? 26 : 10);
        },
        transition: "left ".concat(transitionProps),
        position: 'absolute',
        width: 20,
        height: 20,
        boxShadow: '0px 1px 3px #00000036',
        borderRadius: '50%',
        backgroundColor: function (_a) {
            var checked = _a.checked, disabled = _a.disabled;
            return (disabled || !checked ? theme.color.surface : theme.color.primary);
        }
    }
}); });
exports.default = styles;
//# sourceMappingURL=Switch.styles.js.map