"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    wrapper: {
        height: theme.size.semiX,
        width: theme.size.semiX,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkbox: {
        appearance: 'none',
        border: "2px solid ".concat(theme.color.mediumEmphasis),
        borderRadius: theme.checkbox.borderRadius,
        cursor: 'pointer',
        display: 'inline-block',
        height: 18,
        margin: 0,
        position: 'relative',
        width: 18,
        '&:focus': {
            outline: 'none'
        },
        '&:disabled': {
            border: "2px solid ".concat(theme.color.lowEmphasis),
            cursor: 'default'
        },
        '&:checked': {
            backgroundColor: theme.color.primary,
            border: "2px solid ".concat(theme.color.primary),
            color: theme.color.surface,
            '&:after': {
                content: function (_a) {
                    var indeterminate = _a.indeterminate;
                    return (indeterminate ? '"\uea5d"' : '"\uea3c"');
                },
                display: 'block',
                fontFamily: 'natds-icons',
                fontSize: 18,
                left: '50%',
                position: 'absolute',
                textAlign: 'center',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            },
            '&:disabled': {
                backgroundColor: theme.color.lowEmphasis,
                border: "2px solid ".concat(theme.color.lowEmphasis)
            }
        }
    },
    labelText: {
        color: function (_a) {
            var disabled = _a.disabled;
            return (disabled ? theme.color.lowEmphasis : theme.color.highEmphasis);
        },
        fontFamily: [theme.checkbox.label.primary.fontFamily, theme.checkbox.label.fallback.fontFamily],
        fontSize: theme.checkbox.label.fontSize,
        fontWeight: theme.checkbox.label.primary.fontWeight,
        letterSpacing: theme.checkbox.label.letterSpacing,
        lineHeight: theme.checkbox.label.lineHeight
    }
}); });
exports.default = styles;
//# sourceMappingURL=Checkbox.styles.js.map