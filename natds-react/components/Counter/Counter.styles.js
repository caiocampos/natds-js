"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
var react_jss_1 = require("react-jss");
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    buttonGroup: {
        display: 'flex',
        border: "1px solid ".concat(theme.color.lowEmphasis),
        borderRadius: theme.counter.borderRadius,
        marginTop: theme.spacing.micro,
        width: 'fit-content',
        height: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        '& button': {
            width: function (_a) {
                var size = _a.size;
                return (size === 'semiX' ? theme.size.semi : theme.size.semiX);
            }
        }
    },
    buttonLeft: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0
    },
    buttonRight: {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0
    },
    inputBase: {
        backgroundColor: 'transparent',
        borderBottom: 'none',
        borderLeft: "1px solid ".concat(theme.color.lowEmphasis),
        borderRight: "1px solid ".concat(theme.color.lowEmphasis),
        borderTop: 'none',
        color: theme.color.highlight,
        cursor: 'default',
        height: '100%',
        outline: 'none',
        padding: 0,
        textAlign: 'center',
        width: theme.size.semiX
    },
    labelText: {
        color: theme.color.mediumEmphasis,
        fontFamily: [theme.counter.label.primary.fontFamily, theme.counter.label.fallback.fontFamily],
        fontSize: theme.counter.label.fontSize,
        fontWeight: theme.counter.label.primary.fontWeight,
        letterSpacing: theme.counter.label.letterSpacing,
        lineHeight: theme.counter.label.lineHeight
    }
}); });
exports.default = styles;
//# sourceMappingURL=Counter.styles.js.map