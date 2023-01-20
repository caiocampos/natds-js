"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_jss_1 = require("react-jss");
var getBorderColor = function (theme) { return function (_a) {
    var isFilled = _a.isFilled, feedback = _a.feedback, isDisabled = _a.isDisabled;
    if (isDisabled)
        return theme.color.lowEmphasis;
    if (isFilled)
        return theme.color.highEmphasis;
    if (feedback === 'error')
        return theme.color.alert;
    if (feedback === 'success')
        return theme.color.success;
    return theme.color.lowEmphasis;
}; };
var getLabelColor = function (theme) { return function (_a) {
    var feedback = _a.feedback, isDisabled = _a.isDisabled;
    if (isDisabled)
        return theme.color.lowEmphasis;
    if (feedback === 'error')
        return theme.color.alert;
    if (feedback === 'success')
        return theme.color.success;
    return theme.color.mediumEmphasis;
}; };
var styles = (0, react_jss_1.createUseStyles)(function (theme) { return ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: theme.textField.label.primary.fontFamily
    },
    labelText: {
        color: getLabelColor(theme),
        fontSize: theme.textField.label.fontSize,
        fontWeight: theme.textField.label.primary.fontWeight,
        letterSpacing: theme.textField.label.letterSpacing,
        lineHeight: theme.textField.label.lineHeight,
        marginBottom: theme.spacing.micro,
        '&:disabled': {
            color: 'blue'
        }
    },
    inputWrapper: {
        position: 'relative'
    },
    input: {
        width: '100%',
        height: function (_a) {
            var size = _a.size;
            return theme.size[size];
        },
        position: 'relative',
        backgroundColor: theme.color.surface,
        border: '1px solid',
        borderColor: getBorderColor(theme),
        borderRadius: theme.textField.borderRadius,
        padding: "0 ".concat(theme.spacing.small, "px"),
        color: function (_a) {
            var isFilled = _a.isFilled;
            return (isFilled ? theme.color.highEmphasis : theme.color.mediumEmphasis);
        },
        fontSize: theme.body1.fontSize,
        fontWeight: theme.textField.content.primary.fontWeight,
        letterSpacing: theme.textField.content.letterSpacing,
        lineHeight: theme.textField.content.lineHeight,
        appearance: 'none',
        outline: 'none',
        boxSizing: 'border-box',
        '&:focus:enabled': {
            borderColor: theme.color.primary,
            color: theme.color.mediumEmphasis
        },
        '&:hover:enabled': {
            borderColor: theme.color.highEmphasis,
            color: theme.color.highEmphasis
        }
    },
    icon: {
        color: function (_a) {
            var isDisabled = _a.isDisabled;
            return (isDisabled ? theme.color.lowEmphasis : 'inherit');
        },
        position: 'absolute',
        top: 0,
        right: theme.spacing.small,
        height: '100%',
        display: 'flex',
        alignItems: 'center'
    }
}); });
exports.default = styles;
//# sourceMappingURL=Select.styles.js.map